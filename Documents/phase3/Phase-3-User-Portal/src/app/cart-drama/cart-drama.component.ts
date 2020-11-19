import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ItemDrama } from '../item-drama';
import { DramaService } from '../DramaService';

@Component({
	templateUrl: 'cart-drama.component.html'
})

export class CartDramaComponent implements OnInit {

	items: ItemDrama[] = [];
	total: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private dramaService: DramaService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: ItemDrama = {
					drama: this.dramaService.find(id),
					quantity: 1
				};

				if (localStorage.getItem('cart-drama') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart-drama', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart-drama'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: ItemDrama = JSON.parse(cart[i]);
						if (item.drama.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart-drama', JSON.stringify(cart));
					} else {
						let item: ItemDrama = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart-drama", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart-drama'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				drama: item.drama,
				quantity: item.quantity
			});
			this.total += item.drama.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart-drama'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: ItemDrama = JSON.parse(cart[i]);
			if (item.drama.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart-drama", JSON.stringify(cart));
		this.loadCart();
	}
  cartInfo:any;
  msg1:string;
  msg2:string;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart-drama'));
		this.cartInfo= cart;
    console.log(cart);    //Have to call post method to store card details in DB.
    
    this.msg1="Your order for the book is placed.";
    this.msg2="Thank You!"
	}

}