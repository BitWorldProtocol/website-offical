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

# 使用较小的镜像作为最终镜像的基础
FROM node:16-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 将构建好的文件复制到最终镜像
COPY --from=builder /usr/src/app/dist ./dist

# 安装 serve
RUN npm install --only=prod serve

# 暴露端口
EXPOSE 3000

# 运行静态文件服务器
CMD ["npm", "run", "serve"]