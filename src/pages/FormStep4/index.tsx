import { useHistory , Link} from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep4 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    const handleNextStep = () => {

    }

    return (
        <Theme>
            
            <C.Container>
                <C.Form>
                    <h1>Confirme seus dados informados</h1>
                    <p>Revise seus dados para que não haja erro futuramente em seu cadastro</p>
                    <hr></hr>
                    
                    <C.Pessoal>Nome: {state.name}</C.Pessoal>
                    
                    <C.Profissional>
                        {state.level === 0 && (
                        
                        <SelectOption
                            title="Sou iniciante"
                            description="Comecei a programar há menos de 2 anos"
                            icon="🥳"
                            selected={state.level === 0}
                            onClick={()=>setLevel(0)}/>
                        )}
                        
                        {state.level === 1 && (
                        <SelectOption
                        title="Sou programador"
                        description="Já programo há 2 anos ou mais"
                        icon="😎"
                        selected={state.level === 1}
                        onClick={()=>setLevel(1)}/>
                        )}
                    </C.Profissional>
                    
                    <C.Contatos>
                        <div>E-MAIL: {state.email}</div>
                        <div>GITHUB: {state.github}</div>
                    </C.Contatos>

                    <Link to="/step3" className="backButton">Voltar</Link>
                    <button onClick={handleNextStep}>Finalizar</button>
                
                </C.Form>
            </C.Container>
        
        </Theme>
    );
}