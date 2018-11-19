import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Codemi Home</h3>
                            </div>
                        </div>
                    </div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card mb-3">
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-md-1">
                                            <div class="description-block">
                                            <h2>Users</h2>
                                            <h1>58K</h1>
                                            <span class="description-percentage text-green"><i className="fa fa-caret-up"></i> 0.2%</span>
                                            <span className="description-text">vs last 7 day</span>
                                            <div class="col-md-1">
                                            <div class="description-block">
                                            <h2>Courses Completed</h2>
                                            <h1>5,700</h1>
                                            <span class="description-percentage text-green"><i className="fa fa-caret-up"></i> 0.2%</span>
                                            <div class="col-md-1">
                                            <div class="description-block">
                                            <h2>Learning Plan Completed</h2>
                                            <h1>1,120</h1>
                                            <span class="description-percentage text-green"><i className="fa fa-caret-down"></i> 0.4%</span>
                                            <div class="col-md-1">
                                            <div class="description-block">
                                            <h2>Learning Hour</h2>
                                            <h1>22 m 40 S</h1>
                                            <span class="description-percentage text-green"><i className="fa fa-caret-up"></i> 0.2%</span>
                                            </div>
                                            </div>    
                                            </div>
                                            <div class="card-body">
                                            <canvas id="myAreaChart" width="60px" height="40px"></canvas>
                                            <div class="card-footer small text-muted">Last 7 day</div>
                                            </div>
                                            </div>
                                            <div class="card-body">
                                            <canvas id="myBarChart" width="40px" height="40px"></canvas>
                                            <div class="col-md-4"><snap>Active User Right Now</snap></div>
                                            <h1>479</h1>
                                            <div class="card-footer small text-muted">Real-Time Report</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>        
                        <div class="card mb-3">
                            <div class="card-header">Data Table </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                <th>Name</th>
                                                <th>Height</th>
                                                <th>Mass</th>
                                                <th>Hair color</th>
                                                <th>Skin color</th>
                                                <th>eye color</th>
                                                <th>birth year</th>
                                                <th>gender</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td>Luke Skywalker</td>
                                                <td>172</td>
                                                <td>77</td>
                                                <td>blond</td>
                                                <td>fair</td>
                                                <td>blue</td>
                                                <td>"19BBY"</td>
                                                <td>male</td>
                                                <td>"C-3PO"</td>
                                                <td>167</td>
                                                <td>75</td>
                                                <td>n/a</td>
                                                <td>gold</td>
                                                <td>yellow</td>
                                                <td>"112BBY"</td>
                                                <td>n/a</td>
                                                <td>R2-D2</td>
                                                <td>96</td>
                                                <td>32</td>
                                                <td>n/a</td>
                                                <td>white,blue</td>
                                                <td>red</td>
                                                <td>"33BBY"</td>
                                                <td>male</td>
                                                <td>Darth Vader</td>
                                                <td>202</td>
                                                <td>136</td>
                                                <td>none</td>
                                                <td>white</td>
                                                <td>yellow</td>
                                                <td>41.9BBY</td>
                                                <td>male</td>
                                                <td>Leia Organa</td>
                                                <td>150</td>
                                                <td>49</td>
                                                <td>brown</td>
                                                <td>light</td>
                                                <td>brown</td>
                                                <td>19BBY</td>
                                                <td>female</td>
                                                <td>Owen Lars</td>
                                                <td>178</td>
                                                <td>120</td>
                                                <td>brown,grey</td>
                                                <td>light</td>
                                                <td>blue</td>
                                                <td>52BBY</td>
                                                <td>male</td>
                                                <td>Baru Whitesun lars</td>
                                                <td>165</td>
                                                <td>75</td>
                                                <td>brown</td>
                                                <td>light</td>
                                                <td>blue</td>
                                                <td>47BBY</td>
                                                <td>female</td>
                                                <td>R5-D4</td>
                                                <td>97</td>
                                                <td>32</td>
                                                <td>"n/a"</td>
                                                <td>white, red</td>
                                                <td>red</td>
                                                <td>unknow</td>
                                                <td>"n/a"</td>
                                                <td>Bigs Darklighter</td>
                                                <td>183</td>
                                                <td>84</td>
                                                <td>black</td>
                                                <td>light</td>
                                                <td>brown</td>
                                                <td>24BBY</td>
                                                <td>male</td>
                                                <td>Obi-Wan Kenobi</td>
                                                <td>182</td>
                                                <td>77</td>
                                                <td>auburn, white</td>
                                                <td>fair</td>
                                                <td>blue-gray</td>
                                                <td>57BBY</td>
                                                <td>male</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                 )
             }
         }