create table shelfie_products (
id serial primary key,
name varchar,
price numeric,
image text

);

insert into shelfie_products (name, price, image) 
values 
('Samsung - 82" Class - LED - Q900 Series - 4320p - Smart - 8K UHD TV with HDR', 6999.99, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323717_sd.jpg;maxHeight=640;maxWidth=550'),
('DJI - Mavic 2 Pro Quadcopter with Remote Controller', 1729.99, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6262/6262620_sd.jpg;maxHeight=640;maxWidth=550'),
('Canon - EOS 5D Mark IV DSLR Camera with 24-105mm f/4L IS II USM Lens - Black', 3399.99, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5578/5578529_sd.jpg;maxHeight=640;maxWidth=550'),
('Zhiyun - Crane 3-Axis Handheld Gimbal Stabilizer', 399.99, 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5822/5822514_rd.jpg;maxHeight=640;maxWidth=550');

select * from shelfie_products