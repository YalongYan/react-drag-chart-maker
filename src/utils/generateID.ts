let id = 0;
// 主要用于 为每个元素创建一个独一无二的 ID
export default function generateID() {
  return id++;
}
