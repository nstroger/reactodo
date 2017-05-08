import React from 'react';
import { NavLink } from 'react-router-dom';

// const Link = ({
//   active,
//   children,
//   onClick
// }) => {
//   if (active) {
//     return <span>{children}</span>;
//   }

//   return (
//     <a href="#"
//        onClick={e => {
//          e.preventDefault();
//          onClick();
//        }}
//     > 
//       {children}
//     </a>
//   )
// }

// const mapStateToProps = (state, ownProps) => ({
//   active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => {
//     console.log(ownProps.filter);
//     dispatch(setVisibilityFilter(ownProps.filter));
//   }
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)


const FilterLink = ({ filter, children }) => (
  <NavLink
    to={`/todos/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink;
