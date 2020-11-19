import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { ItemThriller } from '../item-thriller';
import { ThrillerService } from '../ThrillerService';

@Component({
	templateUrl: 'cart-thriller.component.html'
})

export class CartThrillerComponent implements OnInit {

	items: ItemThriller[] = [];
	total: number = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private thrillerService: ThrillerService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: ItemThriller = {
					thriller: this.thrillerService.find(id),
					quantity: 1
				};

				if (localStorage.getItem('cart-thriller') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart-thriller', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart-thriller'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: ItemThriller = JSON.parse(cart[i]);
						if (item.thriller.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart-thriller', JSON.stringify(cart));
					} else {
						let item: ItemThriller = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart-thriller", JSON.stringify(cart));
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
		let cart = JSON.parse(localStorage.getItem('cart-thriller'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				thriller: item.thriller,
				quantity: item.quantity
			});
			this.total += item.thriller.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart-thriller'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: ItemThriller = JSON.parse(cart[i]);
			if (item.thriller.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart-thriller", JSON.stringify(cart));
		this.loadCart();
	}
  cartInfo:any;
  msg1:string;
  msg2:string;
	checkOut() {
		let cart: any = JSON.parse(localStorage.getItem('cart-thriller'));
		this.cartInfo= cart;
    console.log(cart);    //Have to call post method to store card details in DB.
    
    this.msg1="Your order for the book is placed.";
    this.msg2="Thank You!"
	}

}