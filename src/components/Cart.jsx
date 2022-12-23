import React from 'react';

function Cart() {
  return (
      <div>
        
	{/* <div id="preloder">
		<div class="loader"></div>
	</div>	 */}
	<header class="header-section">
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 text-center text-lg-left">
						
						<a href="./index.html" class="site-logo">
							<img src="img/icons/logo.png" alt=""/>
						</a>
					</div>
					<div class="col-xl-6 col-lg-5">
						<form class="header-search-form">
							<input type="text" placeholder="Search on divisima ...."/>
							<button><i class="flaticon-search"></i></button>
						</form>
					</div>
					<div class="col-xl-4 col-lg-5">
						<div class="user-panel">
							<div class="up-item">
								<i class="flaticon-profile"></i>
								<a href="#">Войти</a> в или <a href="#">Зарегистрироваться</a>
							</div>
							<div class="up-item">
								<div class="shopping-card">
									<i class="flaticon-bag"></i>
									<span>0</span>
								</div>
								<a href="#">Корзина</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<nav class="main-navbar">
			<div class="container">
				
				<ul class="main-menu">
					<li><a href="#">Home</a></li>
					<li><a href="#">Pages</a>
						<ul class="sub-menu">
							<li><a href="./product.html">Product Page</a></li>							
							<li><a href="./cart.html">Cart Page</a></li>							
						</ul>
					</li>					
				</ul>
			</div>
		</nav>
	</header>
		
	<div class="page-top-info">
		<div class="container">
			<h4>Корзина</h4>
			<div class="site-pagination">
				<a href="">Home</a> /
				<a href="">Your cart</a>
			</div>
		</div>
	</div>

	<section class="cart-section spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="cart-table">
						<h3>Корзина</h3>
						<div class="cart-table-warp">
							<table>
							<thead>
								<tr>
									<th class="product-th">Товар</th>
									<th class="quy-th">Количество</th>									
									<th class="total-th">Цена</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="product-col">
										<img src="img/cart/1.jpg" alt=""/>
										<div class="pc-title">
											<h4>Animal Print Dress</h4>
											<p>$45.90</p>
										</div>
									</td>
									<td class="quy-col">
										<div class="quantity">
					                        <div class="pro-qty">
												<input type="text" value="1"/>
											</div>
                    					</div>
									</td>									
									<td class="total-col"><h4>$45.90</h4></td>
								</tr>
								<tr>
									<td class="product-col">
										<img src="img/cart/2.jpg" alt=""/>
										<div class="pc-title">
											<h4>Ruffle Pink Top</h4>
											<p>$45.90</p>
										</div>
									</td>
									<td class="quy-col">
										<div class="quantity">
					                        <div class="pro-qty">
												<input type="text" value="1"/>
											</div>
                    					</div>
									</td>																	
									<td class="total-col"><h4>$45.90</h4></td>
								</tr>
								<tr>
									<td class="product-col">
										<img src="img/cart/3.jpg" alt=""/>
										<div class="pc-title">
											<h4>Skinny Jeans</h4>
											<p>$45.90</p>
										</div>
									</td>
									<td class="quy-col">
										<div class="quantity">
					                        <div class="pro-qty">
												<input type="text" value="1"/>
											</div>
                    					</div>
									</td>									
									<td class="total-col"><h4>$45.90</h4></td>
								</tr>
							</tbody>
						</table>
						</div>
						<div class="total-cost">
							<h6>Общая сумма<span>$99.90</span></h6>
						</div>
					</div>
				</div>
				<div class="col-lg-4 card-right">
					<form class="promo-code-form">
						<input type="text" placeholder="Введите промокод"/>
						<button>Отправить</button>
					</form>
					<a href="" class="site-btn">Перейти к оформлению заказа</a>
					<a href="" class="site-btn sb-dark">Продолжить покупку</a>
				</div>
			</div>
		</div>
	</section>
	<section class="related-product-section">
		<div class="container">
			<div class="section-title text-uppercase">
				<h2>Еще товары</h2>
			</div>
			<div class="row">
				<div class="col-lg-3 col-sm-6">
					<div class="product-item">
						<div class="pi-pic">
							<div class="tag-new">New</div>
							<img src="./img/product/2.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Black and White Stripes Dress</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6">
					<div class="product-item">
						<div class="pi-pic">
							<img src="./img/product/5.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6">
					<div class="product-item">
						<div class="pi-pic">
							<img src="./img/product/9.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-sm-6">
					<div class="product-item">
						<div class="pi-pic">
							<img src="./img/product/1.jpg" alt=""/>
							<div class="pi-links">
								<a href="#" class="add-card"><i class="flaticon-bag"></i><span>ADD TO CART</span></a>
								<a href="#" class="wishlist-btn"><i class="flaticon-heart"></i></a>
							</div>
						</div>
						<div class="pi-text">
							<h6>$35,00</h6>
							<p>Flamboyant Pink Top </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="footer-section">
		<div class="container">
			<div class="footer-logo text-center">
				<a href="index.html"><img src="" alt=""/></a>
			</div>
			<div class="row row-footer">
				<div class="col-lg-3 col-sm-6">
					<div class="footer-widget about-widget">
						<h2>About</h2>
						<p>Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.</p>
						<img src="img/cards.png" alt=""/>
					</div>
				</div>								
				<div class="col-lg-3 col-sm-6">
					<div class="footer-widget contact-widget">
						<h2>Questions</h2>
						<div class="con-info">
							<span>C.</span>
							<p>Your Company Ltd </p>
						</div>
						<div class="con-info">
							<span>B.</span>
							<p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
						</div>
						<div class="con-info">
							<span>T.</span>
							<p>+53 345 7953 32453</p>
						</div>
						<div class="con-info">
							<span>E.</span>
							<p>office@youremail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="social-links-warp">
			<div class="container">
				<div class="social-links">
					<a href="" class="instagram"><i class="fa fa-instagram"></i><span>instagram</span></a>
					<a href="" class="google-plus"><i class="fa fa-google-plus"></i><span>g+plus</span></a>
					<a href="" class="pinterest"><i class="fa fa-pinterest"></i><span>pinterest</span></a>
					<a href="" class="facebook"><i class="fa fa-facebook"></i><span>facebook</span></a>
					<a href="" class="twitter"><i class="fa fa-twitter"></i><span>twitter</span></a>
					<a href="" class="youtube"><i class="fa fa-youtube"></i><span>youtube</span></a>
					<a href="" class="tumblr"><i class="fa fa-tumblr-square"></i><span>tumblr</span></a>
				</div>


<p class="text-white text-center mt-5">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>


			</div>
		</div>
	</section>
      </div>
  );
}

export default Cart;