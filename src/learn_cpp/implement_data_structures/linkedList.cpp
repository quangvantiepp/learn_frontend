#include <iostream>

struct Position
{
    int x, y;
    char *name;
    Position(int xM, int yM, char *nameM)
    {
        x = xM;
        y = yM;
        name = nameM;
    };
    ~Position()
    {
        std::cout << "Position Object Deleted" << std::endl;
    };
};

struct Node
{
    Position *positionData;
    Node *next;
    Node *prev;

    Node(Position *value)
    {
        positionData = value;
        next = nullptr;
        prev = nullptr;
    };
    ~Node()
    {
        delete positionData;
        std::cout << "Position Object Deleted" << std::endl;
    };
};

class LinkedList
{
private:
    Node *head;
    Node *tail;
    int size;

public:
    // constructor: initalize
    LinkedList()
    {
        head = nullptr;
        tail = nullptr;
        size = 0;
    };
    // descontructor: free up memory
    ~LinkedList()
    {
        Node *current = head;
        while (current)
        {
            Node *nextNode = current->next;
            delete current;
            current = nextNode;
        }
    };

    void pushFront(Position *newPosition)
    {
        Node *newNode = new Node(newPosition);
        if (!head)
        {
            head = tail = newNode;
        }
        else
        {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
        size++;
    };

    void pushLast(Position *newPosition)
    {

        Node *newNode = new Node(newPosition);

        if (!tail)
        {
            head = tail = newNode;
            return;
        }

        tail->next = newNode;
        newNode->prev = tail;
        tail = newNode;
        size++;
    };

    void addAtPosition(int position, Position *positionData)
    {
        if (position <= 0)
        {
            std::cout << "position invalid" << std::endl;
            return;
        }

        if (position == 1)
        {
            pushFront(positionData);
            return;
        }
        // push last
        if (position > size)
        {
            pushLast(positionData);
            return;
        }

        Node *newNode = new Node(positionData);
        Node *current = head;
        int currentIndex = 1;

        while (current && currentIndex < position - 1)
        {
            current = current->next;
            currentIndex++;
        }

        newNode->next = current->next;
        newNode->prev = current;

        current->next->prev = newNode;
        current->next = newNode;

        size++;
    };

    // delete
    void deleteFront()
    {
        if (!head)
        {
            std::cout << "linkedList is empty" << std::endl;
            return;
        }
        Node *temp = head;

        // check it is one value
        if (head == tail)
        {
            head = tail = nullptr;
        }
        else
        {
            head = head->next;
            head->prev = nullptr;
        }

        delete temp;
        size--;
    };

    void deleteLast()
    {
        if (!tail)
        {
            std::cout << "linkedList is empty" << std::endl;
            return;
        }

        Node *temp = tail;
        if (tail == head)
        {
            tail = head = nullptr;
        }
        else
        {
            tail = tail->prev;
            tail->next = nullptr;
        }
        delete temp;
        size--;
    };
    // print
    void printList()
    {

        Node *current = head;
        while (current)
        {
            std::cout << " " << current->positionData->name << " -> ";
            current = current->next;
        }
        std::cout << std::endl;
    };
};

int main()
{

    LinkedList linkedList;

    for (int i = 0; i < 3; i++)
    {
        Position *newData = new Position(2, i + 1, "posOne1");
        linkedList.pushFront(newData);
    }

    for (int i = 0; i < 3; i++)
    {
        Position *newDataLast = new Position(4, 5 + i, "posTwo");
        linkedList.pushLast(newDataLast);
    }

    Position *newData = new Position(4, 100, "add position 3");
    linkedList.addAtPosition(0, newData);

    linkedList.printList();

    linkedList.deleteFront();
    return 0;
}