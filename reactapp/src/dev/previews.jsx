import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import BasicMenu from "../components/menus/BasicMenu.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BasicMenu">
                <BasicMenu/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews