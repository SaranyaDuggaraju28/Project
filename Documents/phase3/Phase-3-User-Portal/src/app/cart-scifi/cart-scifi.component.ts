import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ItemScifi } from '../item-scifi';
import { ScifiService } from '../ScifiService';

@Component({
	templateUrl: 'cart-scifi.component.html'
})

export class CartScifiComponent implements OnInit {

	items: ItemScifi[] = [];
	total: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private scifiService: ScifiService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: ItemScifi = {
					scifi: this.scifiService.find(id),
					quantity: 1
				};

				if (localStorage.getItem('cart-scifi') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart-scifi', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart-scifi'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: ItemScifi = JSON.parse(cart[i]);
						if (item.scifi.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart-scifi', JSON.stringify(cart));
					} else {
						let item: ItemScifi = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart-scifi", JSON.stringify(cart));
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
		let cart = JSON.parse(localStorage.getItem('cart-scifi'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				scifi: item.scifi,
				quantity: item.quantity
			});
			this.total += item.scifi.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart-scifi'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: ItemScifi = JSON.parse(cart[i]);
			if (item.scifi.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart-scifi", JSON.stringify(cart));
		this.loadCart();
	}
  cartInfo:any;
  msg1:string;
  msg2:string;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart-scifi'));
		this.cartInfo= cart;
    console.log(cart);    //Have to call post method to store card details in DB.
    
    this.msg1="Your order for the book is placed.";
    this.msg2="Thank You!"
	}

}