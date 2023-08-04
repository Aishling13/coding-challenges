import { useState } from "react";
import cat from './images/cat.jpg'
import dog from './images/dog.jpg'
import hammy from './images/hammy.jpg'
import '../ImageGen/ImageGen.css';


// const catData = {
// 	imagesrc: cat,
// 	alt: "catto"
// }

export const ImageGenerator = () => {
	// set initial state
	const [imageSrc, setImageSrc] = useState(hammy);


	// function - when Dog button is clicked set image src state to dog
	function handleDogClick() {
		setImageSrc(dog);
	}

    // function - when Cat button is clicked set image src state to Cat
	function handleCatClick() {
		setImageSrc(cat);
	}

	return (
    <div className="App">
      <header className="App-header">
              
      </header>
      <main className="App-main">
				<div className="container">
					<button
						className="button" 
						type="button"
						onClick={handleDogClick}
						>
						Dog
					</button>

					<div className='image-container'>
						<img 
							className="image"
							src={imageSrc} 
							alt="cute animal"
						/>
					</div>
					<button
						className="button" 
						type="button" 
						onClick={handleCatClick}
						>
						Cat
					</button>
					</div>
      </main>
    </div>
	)
}

// export default ImageGenerator;