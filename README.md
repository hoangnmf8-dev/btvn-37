# Bài tập: React Multi-Step Wizard
Ứng dụng biểu mẫu nhiều bước (Wizard Form) tập trung vào việc quản lý State phức tạp và xử lý Validation chéo giữa các bước.

- Công nghệ sử dụng: 
+ Core: React (Vite).
+ State Management: Zustand (Lưu trữ data tập trung xuyên suốt các bước).
+ Form & Validation: React Hook Form + Zod.
+ Routing: React Router DOM.
+ Styling: Tailwind CSS.

- Tính năng nổi bật
+ Cross-Step Validation: Bước Username yêu cầu giá trị phải chứa First Name từ bước trước đó (Sử dụng superRefine của Zod).
+ Async Operation: Mô phỏng tác vụ bất đồng bộ chờ 2 giây với Loading Indicator trước khi hoàn tất.
+ Persistence: Dữ liệu không bị mất khi quay lại (Back) các bước trước nhờ Store tập trung.
+ Route Guard: Tự động chuyển hướng về Step 1 nếu người dùng cố tình truy nhập các trang khác qua url khi dữ liệu bước trước chưa tồn tại.
+ Final Preview: Hiển thị kết quả cuối cùng dưới định dạng JSON Code Block.