
#include <iostream>
#include <string>

// hash map not use the library of the c++

template <typename K, typename V>
class Node
{
public:
    K key;
    V value;
    Node *next;

    Node(K key, V value) : key(key), value(value), next(nullptr) {}
};

template <typename K, typename V>
class HashMap
{
private:
    Node<K, V> **table; // Array of pointers to linked lists
    int capacity;
    int size;

    // Simple hash function
    int hashFunction(K key)
    {
        int hash = 0;
        std::string strKey = std::to_string(key); // Suppose K is a type that can be converted to a string.
        for (char ch : strKey)
        {
            hash = (hash * 31 + ch) % capacity;
        }
        return hash;
    }

public:
    HashMap(int cap = 100) : capacity(cap), size(0)
    {
        table = new Node<K, V> *[capacity];
        for (int i = 0; i < capacity; i++)
        {
            table[i] = nullptr;
        }
    }

    ~HashMap()
    {
        for (int i = 0; i < capacity; i++)
        {
            Node<K, V> *entry = table[i];
            while (entry != nullptr)
            {
                Node<K, V> *prev = entry;
                entry = entry->next;
                delete prev;
            }
        }
        delete[] table;
    }

    // add double key-value
    bool insert(K key, V value)
    {
        int hashIndex = hashFunction(key);
        Node<K, V> *entry = table[hashIndex];

        while (entry != nullptr)
        {
            if (entry->key == key)
            {
                entry->value = value; // if key already exit, update value
                return false;
            }
            entry = entry->next;
        }

        entry = new Node<K, V>(key, value);
        entry->next = table[hashIndex];
        table[hashIndex] = entry;
        size++;
        return true;
    }

    // delete one item by key
    bool remove(K key)
    {
        int hashIndex = hashFunction(key);
        Node<K, V> *entry = table[hashIndex];
        Node<K, V> *prev = nullptr;

        while (entry != nullptr && entry->key != key)
        {
            prev = entry;
            entry = entry->next;
        }

        if (entry == nullptr)
            return false; // not found key

        if (prev == nullptr)
        {
            table[hashIndex] = entry->next;
        }
        else
        {
            prev->next = entry->next;
        }
        delete entry;
        size--;
        return true;
    }

    // get value by key
    bool get(K key, V &value)
    {
        int hashIndex = hashFunction(key);
        Node<K, V> *entry = table[hashIndex];

        while (entry != nullptr)
        {
            if (entry->key == key)
            {
                value = entry->value;
                return true;
            }
            entry = entry->next;
        }
        return false;
    }

    int getSize() const
    {
        return size;
    }

    bool isEmpty() const
    {
        return size == 0;
    }
};

int main()
{
    HashMap<int, int> map;

    map.insert(1, 10);
    map.insert(2, 20);

    int value;
    if (map.get(1, value))
    {
        std::cout << "Value for key 1: " << value << std::endl;
    }

    map.remove(1);

    if (!map.get(1, value))
    {
        std::cout << "Key 1 not found." << std::endl;
    }

    return 0;
}
