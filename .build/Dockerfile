FROM node:20 as build
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
ARG NODE_ENV
ENV NODE_ENV="${NODE_ENV}"
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN apk add --no-cache bash jq curl
RUN for ip in `curl -s https://www.cloudflare.com/ips-v4` ; do echo "set_real_ip_from $ip;" >> /etc/nginx/conf.d/20_cf-ip.conf;done && \
    for ip in `curl -s https://www.cloudflare.com/ips-v6` ; do echo "set_real_ip_from $ip;" >> /etc/nginx/conf.d/20_cf-ip.conf;done && \
    echo "real_ip_header CF-Connecting-IP;" >> /etc/nginx/conf.d/20_cf-ip.conf
COPY ./.build/entrypoint.sh /
COPY --from=build /opt/app/dist /usr/share/nginx/html
COPY ./.build/nginx/default.conf ./.build/nginx/json-logs.conf /etc/nginx/conf.d/
COPY ./.build/nginx/nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]