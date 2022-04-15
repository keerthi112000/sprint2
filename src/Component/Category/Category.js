import React from "react";
import axios from "axios";
import {useEffect} from "react";


function Category(){
      return(
        <section class="categories" id="categories">
            <h1 class="heading"> PRODUCT CATEGORIES </h1>
            
            <div class="box-container">
                <div class="box">
                    <a target="_blank" href="https://www.w3schools.com/">
                        <button type="button">
                        <h4>MOBILES</h4>
                        </button>
                    </a>
                </div>
            
                <div class="box">
                    <a target="_blank" href="https://www.w3schools.com/">
                        <button type="button">
                        <h4>LAPTOPS</h4>
                        </button>
                    </a>
                </div>
            </div>

        </section>        
    )
}

export default Category;