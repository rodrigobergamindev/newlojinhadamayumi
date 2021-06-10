import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export function Slider() {

    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            style={{height:'50vh'}}
        >
    <div data-src="/img/slider/canal.png" />
    <div data-src="/img/slider/implante.png" />
    <div data-src="/img/slider/protese.png" />
  </AutoplaySlider>
    )
}