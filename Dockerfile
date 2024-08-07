# 使用官方 Node.js 运行时作为父镜像
FROM node:16-alpine AS builder

# 设置工作目录
WORKDIR /usr/src/app

# 将 package.json 和 package-lock.json 文件复制到容器中
COPY package*.json ./

# 安装依赖
RUN npm install

# 将源代码复制到容器中
COPY . .

# 构建应用
RUN npm run build

# 使用 nginx 镜像来提供静态文件
FROM nginx:alpine

# 复制 nginx 的配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 复制构建产物
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html