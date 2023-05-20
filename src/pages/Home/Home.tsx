import CryptoJS from 'crypto-js';
import { useState } from 'react';
import * as Styled from './Home.styled'
import { Box, Typography, Switch } from '@mui/material';
import copy from 'copy-to-clipboard';
import { IoCopy } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai'

export const Home = () => {

	const [isDesc, setIsDesc] = useState(false);
	const [phrase, setPhrase] = useState('');
	const [key, setKey] = useState('');
	const [encryptedPhrase, setEncryptedPhrase] = useState('');
	const [decryptedPhrase, setDecryptedPhrase] = useState('');
	const [iconChange, setIconChange] = useState(false);
  
	const encrypt = () => {
	  const encrypted = CryptoJS.AES.encrypt(phrase, key).toString();
	  setEncryptedPhrase(encrypted);
	};
  
	const decrypt = () => {
	  const decrypted = CryptoJS.AES.decrypt(encryptedPhrase, key);
	  setDecryptedPhrase(decrypted.toString(CryptoJS.enc.Utf8));
	};

    return (
			<Styled.Home>
				<Styled.Inputs>
					<Box className="switch">
						<Typography> CRIP/DESC </Typography>
						<Switch
							size='medium'
							color='secondary'
							onChange={() => setIsDesc(!isDesc)}
						/>
					</Box>

					<Box className="inputs">
						<Styled.Input spellCheck={false} >
							<Typography>
								{isDesc? "Coloque usa mensagem" : "Coloque sua frase"}
							</Typography>
							<input
							onChange={(e) => {
								if(!isDesc) {
									setPhrase(e.target.value)
								}else
								setEncryptedPhrase(e.target.value)
								}}
							type='text' />
						</Styled.Input>

						<Styled.Input>
							<Typography>
								Coloque sua chave
							</Typography>
							<input
								placeholder='Números || Letras'
								onChange={(e) => setKey(e.target.value)}
								type='text' />
						</Styled.Input>

						<Styled.Botao onClick={() => {
							if(!isDesc){
								encrypt();
							}
							else{
								decrypt();
							}
						}}>
							{isDesc? "Descriptografar" : "Criptografar"}
						</Styled.Botao>
					</Box>
					<Box className={decryptedPhrase || encryptedPhrase? "resultado" : "disabled"}>
						<Typography>
							{ isDesc? decryptedPhrase : encryptedPhrase }
						</Typography>
				
					<button onClick={(e) => {
								copy(isDesc? decryptedPhrase : encryptedPhrase);
								e.preventDefault();
								setIconChange(true)
							}
						}>
						{ !isDesc &&
							<span>
								{	iconChange ?
									<AiOutlineCheck/>
									:
									<IoCopy />
								}
							</span>
						}
					</button>
					</Box>
				</Styled.Inputs>
			</Styled.Home>
    )
}