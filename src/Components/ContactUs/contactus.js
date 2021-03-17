import map from '../../assets/map.jpg'

const contactus = () => {


    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(event.target)
    }

    return(
        <div class="container mb-5 slide">
            <div style={{textAlign:"center"}}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div class="row bg-grey" style={{borderRadius:"20px"}}>
                <div class="col thumbnail">
                    <img class="container-fluid" src={map} width="500px"/>
                </div>
                <div class="col container">
                    <form onSubmit={handleSubmit}>
                        <label for="fname">Name</label>
                        <input type="text" id="fname" name="name" placeholder="Your name" />

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" />

                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
                        <button class="button" data-micron="pop" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contactus