function Card(props)
{
    //console.log(props);
    return (
       <div>
      <div className="Card">
      <h1>hello i am {props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque itaque dolorem voluptatum suscipit soluta fuga odit molestias quisquam a non laborum tenetur sit nemo, blanditiis quod commodi repudiandae. Non, quos!</p>
    </div>
    </div>
    )

}

export default Card;