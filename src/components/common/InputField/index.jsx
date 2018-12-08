import React from 'react'
import { Wrapper, Label } from './styles'

const InputField = ({ label, children, flex }) => (
	<Wrapper flex={flex}>
		<Label>{label}</Label>
		{children}
	</Wrapper>
)

export { InputField }
