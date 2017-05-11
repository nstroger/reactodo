import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div className="btn-group btn-group-sm" role="group" aria-label="Filters">
    <FilterLink filter="all">All</FilterLink>
    <FilterLink filter="active">Active</FilterLink>
    <FilterLink filter="completed">Completed</FilterLink>
  </div>
)

export default Footer;
