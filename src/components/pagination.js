import React from 'react'
import { Link } from 'gatsby'
import { pagination, prev, next } from './pagination.module.css'

export default ({ links }) => (
    <div className={pagination}>
        {links.previousPagePath ? <Link className={prev} to={links.previousPagePath}>Previous</Link> : null}
        {links.nextPagePath ? <Link className={next} to={links.nextPagePath}>Next</Link> : null}
    </div>
)
