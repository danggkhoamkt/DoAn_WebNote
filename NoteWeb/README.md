# FE Base

Source base Frontend dùng **Vite + React (JavaScript) + Tailwind CSS**.

## Cấu trúc thư mục

```
src/
├── api/          # Gọi API, axios instance...
├── components/   # Component dùng chung
├── hooks/        # Custom hooks
├── layouts/      # Layout khung trang (Header/Footer/Sidebar...)
├── pages/        # Các trang chính
├── utils/        # Hàm tiện ích
├── App.jsx
├── main.jsx
└── index.css     # Import Tailwind
```

## Cài đặt & chạy

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Biến môi trường

Sao chép `.env.example` thành `.env` và chỉnh sửa theo nhu cầu.
