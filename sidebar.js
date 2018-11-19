import React, {Component} from 'react';

export default class SideBar extends Component {
    render(){
        return (
           <aside class="sidebar">
                    <div class="menu">
                       <ul class="menu-content">
                            <li class="header">HOME</li>
                            <hr>
                            <li class="header">LEARNING</li>
                            <li><a href="#"><i class="far fa-gem">&ensp;</i>Courses<span class="label label-danger pull-right">21</span></a></li>
                            <li><a href="#"><i class="fab fa-usb"></i>&ensp;Learning plans</a></li>
                            <hr>
                            <li class="header">MANAGE</li>
                            <li><a href="#"><i class="fas fa-user"></i>&ensp;User</a></li>
                            <li><a href="#"><i class="fas fa-certificate"></i>&ensp;Skill</a></li>
                            <li><a href="#"><i class="fas fa-chart-area"></i>&ensp;Reports</a></li>
                            <li><a href="#"><i class="fas fa-chart-line"></i>&ensp;Analytics</a></li>
                            <li><a href="#"><i class="fas fa-bullhorn"></i>&ensp;Announcement</a></li>
                            <hr>
                            <li class="header">CONFIGURE</li>
                            <li><a href="#"><i class="fas fa-star-half-alt"></i>&ensp;Points</a></li>
                            <li><a href="#"><i class="fas fa-certificate"></i>&ensp;Reward</a></li>
                            <li><a href="#"><i class="fas fa-envelope"></i>&ensp;Email templates</a></li>
                            <li><a href="#"><i class="fas fa-info-circle"></i>&ensp;Company info</a></li>
                            <li><a href="#"><i class="fas fa-user"></i>&ensp;Billing</a></li>
                        </ul>
                    </div>
            </aside>
        )
    }
}

