import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Navbar = () => {

    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const {title} = data.site.siteMetadata


    return (
        <div>
            <nav>
                <Link to="/">
                    <h1>{title}</h1>
                </Link>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;