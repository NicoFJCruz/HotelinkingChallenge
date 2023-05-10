# Imagen base
FROM php:8.1

# Directorio de trabajo
WORKDIR /app

# Copiar todo el contenido de la aplicación
COPY . /app

# Instalar dependencias
RUN apt-get update && \
    apt-get install -y \
        git \
        zip \
        unzip

# Instalar extensiones de PHP
RUN docker-php-ext-install pdo_mysql

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar dependencias de Composer
RUN composer install --no-scripts --no-autoloader

# Copiar todo el contenido a la carpeta HTML
COPY . /var/www/html

# Optimizar el autoload de Composer
RUN composer dump-autoload --optimize

# Exponer el puerto 8000
EXPOSE 8000

# Comando de inicio
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]