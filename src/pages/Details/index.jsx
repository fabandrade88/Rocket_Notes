import { Container} from './styles.js'
import { Button } from '../../components/Button';

export function Details() {

    return(
        <Container>
        <h1>Hello, World!</h1>
        <span> THe world is alive</span>

        <Button title= "Login" loading/>
        <Button title= "Sair"/>
        <Button title= "Ficar"/>

        </Container>
    )
}