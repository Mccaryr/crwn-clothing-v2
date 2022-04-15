import './CategoryList.scss'
import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = ({categories}) => {
  return(
    <div className='categories-container'>
    {categories.map(category => (
        <CategoryItem category={category} key={category.id}/>
        
      ))}
      
    </div>
  )
}

export default CategoryList;