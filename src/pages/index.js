import React from "react"
import Link from "gatsby-link"

export default () => 
    <div>
        <p>Hello gatsby!</p>
        <div>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
        <div>
            <Link to="/page-2" >Go to Page 2</Link>
        </div>
    </div>
