-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2023 a las 05:07:52
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerceproyectoweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(25) NOT NULL,
  `CategoriaProducto` varchar(25) NOT NULL,
  `stockProducto` int(11) NOT NULL,
  `precio` float NOT NULL,
  `descripcion` text NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `foto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `CategoriaProducto`, `stockProducto`, `precio`, `descripcion`, `oferta`, `foto`) VALUES
(1, 'Coca-cola', 'Bebidas', 15, 3000, 'Coca-cola es una bebida Norteamericana creada...', 0, 'https://panchitoverduleria.cl/wp-content/uploads/2020/08/panchito-verduleria-coca-cola-3-litros-thegem-product-single.jpg'),
(2, 'Sprite', 'Bebidas', 3, 2700, 'Sprite en su calidad de 1, 2 o 3 litros...', 0, 'https://corcoranonline.cl/media/catalog/product/cache/14a40e6afad45432c791400c807c9794/0/6/0610010030011_2021-12-28_22_25_04.JPG'),
(3, 'Plateada', 'Carnes', 56, 4500, 'Plateada de cerdo, sacada de las mejores granjas de ...', 1, 'https://www.el-legado.cl/wp-content/uploads/2021/04/Plateada-scaled.jpg'),
(4, 'Lomo de cerdo', 'Carnes', 23, 5000, 'Cerdito!', 1, 'https://secure.porcicultura.com/uploads/Upload-5ebd90f523a6d-14052020.jpeg'),
(5, 'Leche Soprole', 'Lacteos', 12, 1300, 'leche de las mejores ...', 0, 'https://jumbo.vteximg.com.br/arquivos/ids/346104/Leche-entera-soprole-200-ml-1-195377602.jpg?v=637297726654670000'),
(6, 'Leche colun', 'Lacteos', 11, 1200, 'leche de las mejores...', 0, 'https://www.colun.cl/admin/archivos/imagenes/productos/m7WXmBxkFFv6DKACG4oe.png'),
(7, 'Zanahorias', 'Verduras ', 456, 800, 'las verduras mas frescas', 1, 'https://feriaadomicilio.cl/wp-content/uploads/2019/11/zana.jpg'),
(8, 'Brocoli ', 'Verduras', 312, 400, 'las verduras frescas', 1, 'https://www.shutterstock.com/shutterstock/photos/1052186909/display_1500/stock-photo-raw-broccoli-isolated-on-white-background-1052186909.jpg'),
(9, 'Cheetos', 'Snacks', 32, 1200, 'Disfruta los mas exquisitos', 0, 'https://cheetos.com.mx//front/dist/img/cheetos-1.png'),
(10, 'Doritos', 'Snacks', 78, 1300, 'Los mejores, disfrutalos!', 1, 'https://i0.wp.com/www.confiterialamundial.cl/wp-content/uploads/confiteria-la-mundial-doritos-queso-320.jpg?fit=600%2C600&ssl=1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariocomercio`
--

CREATE TABLE `usuariocomercio` (
  `representante` varchar(30) NOT NULL,
  `nombreEmpresa` varchar(30) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `emailComercio` varchar(320) NOT NULL,
  `contrasenaComercio` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuariocomercio`
--

INSERT INTO `usuariocomercio` (`representante`, `nombreEmpresa`, `direccion`, `emailComercio`, `contrasenaComercio`) VALUES
('Alison Jara', 'barrio1', 'calle, barrio #1234 ', 'email.comercio@gmail.com', 'test1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarionatural`
--

CREATE TABLE `usuarionatural` (
  `rut` int(11) NOT NULL,
  `nombreUsuario` varchar(10) NOT NULL,
  `email` varchar(320) NOT NULL,
  `contrasena` varchar(20) NOT NULL,
  `region` varchar(20) NOT NULL,
  `comuna` varchar(20) NOT NULL,
  `nombreApellido` varchar(100) NOT NULL,
  `fechaNacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarionatural`
--

INSERT INTO `usuarionatural` (`rut`, `nombreUsuario`, `email`, `contrasena`, `region`, `comuna`, `nombreApellido`, `fechaNacimiento`) VALUES
(201750725, 'usertest', 'lucas.altamirano.v@gmail.com', 'test1234', 'valparaiso', 'vina del mar', 'Lucas Altamirano', '1999-12-15');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `usuariocomercio`
--
ALTER TABLE `usuariocomercio`
  ADD PRIMARY KEY (`nombreEmpresa`);

--
-- Indices de la tabla `usuarionatural`
--
ALTER TABLE `usuarionatural`
  ADD PRIMARY KEY (`rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
