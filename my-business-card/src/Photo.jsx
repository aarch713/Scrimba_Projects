import image from './assets/IMG_2303-Photoroom.jpg'

export default function Photo(){
    return(
        <div className="photoContainer">
            <img src = {image} alt="photo"/>
        </div>
    )
}