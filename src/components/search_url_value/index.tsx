export function getTGSetsValue(url: string): string | null {
  // Tạo một URL object từ chuỗi URL
  const urlObj = new URL(url, "http://dummy.com");

  // Sử dụng URLSearchParams để lấy giá trị của tg-sets
  const params = new URLSearchParams(urlObj.search);

  // Kiểm tra nếu có tham số tg-sets và trả về giá trị của nó
  if (params.has("tg-sets")) {
    return params.get("tg-sets");
  }

  // Nếu không có tg-sets trong search params, thử phân tích cú pháp từ pathname
  const pathSegments = urlObj.pathname.split("/");
  for (const segment of pathSegments) {
    if (segment.startsWith("tg-sets=")) {
      return segment.split("=")[1];
    }
  }

  // Trả về null nếu không tìm thấy giá trị của tg-sets
  return null;
}

// Các ví dụ sử dụng
const url1 = "service/tg?tg-sets=4&target";
const url2 = "service/tgName?tg-sets=4&target=16";
const url3 = "service/tg/tg-sets=4?target=5";
const url4 = "service/tg-sets=4";

console.log(getTGSetsValue(url1)); // Output: 4
console.log(getTGSetsValue(url2)); // Output: 4
console.log(getTGSetsValue(url3)); // Output: 4
console.log(getTGSetsValue(url4)); // Output: 4
