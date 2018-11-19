import React,{Component} from "react";

export default class Header extends Component{
	render(){
		return(
		<div class="wrapper">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
			<div class="navbar-header">
				<img alt="Brand" src="gambar.png">
			</div>
			<i class="fas fa-bell fa-2x pull-right"><span class="label label-danger pull-top">18</span></i>
		</div>
		</nav>
		)
	}
}