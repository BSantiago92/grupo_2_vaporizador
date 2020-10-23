-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-09-2020 a las 20:22:25
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vapear_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Zoolab'),
(2, 'Home Ing'),
(3, 'Stronghold'),
(4, 'Alpha'),
(5, 'Veribet'),
(6, 'Kanlam'),
(7, 'Andalax'),
(8, 'Tin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Poaceae'),
(2, 'Asteraceae'),
(3, 'Capparaceae'),
(4, 'Polygonaceae'),
(5, 'Brassicaceae');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(70) NOT NULL,
  `model_1` varchar(45) NOT NULL,
  `model_2` varchar(45) NOT NULL,
  `model_3` varchar(45) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,0) UNSIGNED NOT NULL,
  `img` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `category_id`, `brand_id`, `name`, `model_1`, `model_2`, `model_3`, `description`, `price`, `img`) VALUES
(4, 1, 7, 'Creeping Mannagrass', 'Mauv', 'Teal', 'Violet', 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus', '916', '/images/default.jpg'),
(7, 4, 8, 'Spinster\'s Blue Eyed Mary', 'Green', 'Indigo', 'Purple', 'erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec', '2638', '/images/default.jpg'),
(8, 5, 2, 'Hawai\'i Quillwort', 'Crimson', 'Maroon', 'Blue', 'non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus', '2090', '/images/default.jpg'),
(9, 1, 3, 'Piper\'s Buxbaumia Moss', 'Turquoise', 'Blue', 'Red', 'curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan', '3527', '/images/default.jpg'),
(10, 5, 3, 'Watson\'s Fleabane', 'Blue', 'Maroon', 'Fuscia', 'posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi', '2043', '/images/default.jpg'),
(12, 5, 6, 'Quinine', 'Pink', 'Pink', 'Green', 'molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae', '3742', '/images/default.jpg'),
(13, 1, 4, 'Rannoch-rush', 'Puce', 'Yellow', 'Mauv', 'aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a', '2741', '/images/default.jpg'),
(14, 5, 6, 'Shieldplant', 'Crimson', 'Teal', 'Yellow', 'suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam', '3930', '/images/default.jpg'),
(15, 5, 6, 'Pismo Clarki', 'Indigo', 'Maroon', 'Maroon', 'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam', '3799', '/images/default.jpg'),
(16, 4, 1, 'Orange Wall Lichen', 'Mauv', 'Teal', 'Yellow', 'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum', '3797', '/images/default.jpg'),
(17, 4, 7, 'Jesup\'s Hawthorn', 'Teal', 'Crimson', 'Crimson', 'odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum', '2537', '/images/default.jpg'),
(18, 3, 8, 'Cooba', 'Turquoise', 'Teal', 'Green', 'quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a', '1430', '/images/default.jpg'),
(19, 2, 3, 'Nodding Ragwort', 'Green', 'Khaki', 'Red', 'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor', '1861', '/images/default.jpg'),
(20, 5, 4, 'Hillebrand\'s Flatsedge', 'Orange', 'Violet', 'Teal', 'hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante', '1169', '/images/default.jpg'),
(21, 2, 2, 'Roughfruit Berry', 'Indigo', 'Maroon', 'Red', 'morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae', '3709', '/images/default.jpg'),
(22, 1, 7, 'Kamanomano', 'Khaki', 'Fuscia', 'Indigo', 'sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque', '2224', '/images/default.jpg'),
(23, 4, 7, 'Kamchatka Rhododendron', 'Red', 'Khaki', 'Fuscia', 'phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis', '2495', '/images/default.jpg'),
(26, 1, 3, 'Microlychnus Lichen', 'Orange', 'Blue', 'Blue', 'non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque', '3936', '/images/default.jpg'),
(27, 1, 2, 'Saw Palmetto', 'Violet', 'Turquoise', 'Goldenrod', 'volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio', '1168', '/images/default.jpg'),
(28, 3, 2, 'Roseroot Stonecrop', 'Turquoise', 'Maroon', 'Indigo', 'turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc', '3158', '/images/default.jpg'),
(29, 2, 2, 'Florida Fishpoison Tree', 'Mauv', 'Red', 'Purple', 'ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris', '3859', '/images/default.jpg'),
(30, 4, 2, 'Connecticut Blackberry', 'Pink', 'Crimson', 'Turquoise', 'nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in', '3740', '/images/default.jpg'),
(31, 2, 1, 'Tapertip Smartweed', 'Maroon', 'Crimson', 'Khaki', 'justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum', '634', '/images/default.jpg'),
(32, 1, 2, 'Bartramia Moss', 'Indigo', 'Red', 'Mauv', 'sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec', '4128', '/images/product-1600302008573.jpg'),
(33, 5, 3, 'Cup Lichen', 'Fuscia', 'Violet', 'Khaki', 'eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a', '4055', '/images/default.jpg'),
(34, 4, 3, 'Tansyleaf Nightshade', 'Pink', 'Goldenrod', 'Pink', 'suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl', '3247', '/images/default.jpg'),
(35, 4, 5, 'Johnston\'s Monkeyflower', 'Aquamarine', 'Orange', 'Green', 'suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac', '1829', '/images/default.jpg'),
(36, 3, 5, 'American Woollyfruit Sedge', 'Purple', 'Yellow', 'Puce', 'maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus', '1309', '/images/default.jpg'),
(37, 5, 6, 'Sleepingbeauty Waterlily', 'Khaki', 'Turquoise', 'Indigo', 'potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue', '2992', '/images/default.jpg'),
(38, 1, 6, 'Broadleaf Caper', 'Red', 'Yellow', 'Crimson', 'lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl', '1586', '/images/default.jpg'),
(39, 1, 3, 'Rustyhair Saxifrage', 'Khaki', 'Mauv', 'Violet', 'et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam', '1914', '/images/default.jpg'),
(40, 1, 4, 'Sharpscale Sedge', 'Puce', 'Pink', 'Goldenrod', 'magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum', '4484', '/images/default.jpg'),
(41, 3, 6, 'White Logwood', 'Puce', 'Red', 'Turquoise', 'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh', '2958', '/images/default.jpg'),
(42, 5, 4, 'Tweedy\'s Ivesia', 'Mauv', 'Aquamarine', 'Teal', 'ut at dolor quis odio consequat varius integer ac leo', '3641', '/images/default.jpg'),
(43, 3, 2, 'Yellow Wallowa Indian Paintbrush', 'Red', 'Yellow', 'Khaki', 'ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at', '2806', '/images/default.jpg'),
(44, 1, 4, 'Jelly Palm', 'Crimson', 'Orange', 'Puce', 'mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis', '3662', '/images/default.jpg'),
(45, 4, 6, 'Small Rocklettuce', 'Goldenrod', 'Indigo', 'Maroon', 'velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id', '2686', '/images/default.jpg'),
(47, 3, 6, 'Walker\'s Suncup', 'Crimson', 'Blue', 'Orange', 'erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla', '3569', '/images/default.jpg'),
(48, 1, 2, 'Point Reyes Lupine', 'Indigo', 'Puce', 'Mauv', 'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis', '358', '/images/default.jpg'),
(49, 1, 7, 'Myriotrema Lichen', 'Indigo', 'Khaki', 'Green', 'lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam', '2697', '/images/default.jpg'),
(50, 4, 6, 'producto edit', 'Maroon', 'Violet', 'Teal', 'vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis', '2489', '/images/product-1600987512230.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_cart`
--

CREATE TABLE `products_cart` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `total` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `date` date NOT NULL,
  `operation_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `token` varchar(250) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tokens`
--

INSERT INTO `tokens` (`id`, `token`, `user_id`) VALUES
(3, 'hT6yj/kY5OOZ+ESiT2wwc8X0PYw4TeYjxxoMDcNnvDUcXCNlST/KMK1jAn5BmdoPzcTltC4OIQa1PWfLba9FOg==', 2),
(4, 'VADyDiszIeb9ij4i1uuAw7ZmrSepTBaTGx3pycRptILqjeHc1997mXk6HSjCQxJgEjOzvwvkeeMmw5IPbEVlIQ==', 5),
(8, 'nh+3EB4c2vlMkCkmFi2UJUoy35e93yvFuAQgzE8V2vi4s/zuLth6RLY6tHsY7nbUNXrv++SbdoxjudKADzNLvA==', 22),
(17, 'B07Es9qP2cMOHiW8dIpMd7GHlhLMTNl1JoRLglO3fN/PCy+BRyrpRW2HTcbqpZmW1yyq9E+nIhTIddyjCOfRww==', 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `image` varchar(45) NOT NULL,
  `user_category_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `category_id`, `first_name`, `last_name`, `email`, `password`, `image`, `user_category_id`) VALUES
(1, 1, 'Cassius', 'Maes', 'cmaes0@simplemachines.org', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(2, 1, 'Lizzie', 'Caldron', 'lcaldron1@weebly.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(3, 1, 'Barde', 'Threadkell', 'bthreadkell2@time.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(4, 1, 'Giustino', 'Braybrooks', 'gbraybrooks3@php.net', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(5, 2, 'Hervey', 'Guile', 'hguile4@ezinearticles.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(6, 2, 'Derek', 'Carnie', 'dcarnie5@elpais.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(7, 2, 'Elsinore', 'Eldon', 'eeldon6@fema.gov', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(8, 2, 'Vida', 'Pearde', 'vpearde7@adobe.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(9, 1, 'Electra', 'Skeath', 'eskeath8@springer.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(10, 1, 'Orton', 'Shotboult', 'oshotboult9@people.com.cn', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(11, 2, 'Corty', 'Crowth', 'ccrowtha@wikipedia.org', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(12, 2, 'Fidole', 'Hanscombe', 'fhanscombeb@marketwatch.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(13, 2, 'Karlotta', 'Padkin', 'kpadkinc@odnoklassniki.ru', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(14, 2, 'Nickie', 'Drohane', 'ndrohaned@nasa.gov', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(15, 1, 'Latia', 'Mapston', 'lmapstone@cbslocal.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(16, 2, 'Cyndia', 'Whelan', 'cwhelanf@seattletimes.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(17, 1, 'Martelle', 'Posnett', 'mposnettg@bbb.org', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(18, 2, 'Elyn', 'Cardoo', 'ecardooh@princeton.edu', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(19, 1, 'Cosette', 'Jaquet', 'cjaqueti@illinois.edu', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(20, 2, 'Free', 'Eberdt', 'feberdtj@globo.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(21, 1, 'bruno', 'cami', 'bruno.cami@hotmail.com', '$2a$10$zHmOHx/fsH7iRLyezYBkruWfBbe8lpPUOoZNI9gtXQj1wRytVCLwW', '/images/default.jpg', NULL),
(23, 2, 'nuevo ', 'usuario 2', 'nuevo@vape.com', '$2a$10$pYm74ugCalsJSi682mcih.Tyq5qHygmMJdTkHFZTAWnKIgIhLYZ9e', '', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_categories`
--

CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL,
  `category` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_categories`
--

INSERT INTO `users_categories` (`id`, `category`) VALUES
(1, 'admin'),
(2, 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products_cart`
--
ALTER TABLE `products_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `products_cart`
--
ALTER TABLE `products_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `users_categories`
--
ALTER TABLE `users_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
