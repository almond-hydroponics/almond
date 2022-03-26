import styled from '@emotion/styled';
import { Logo } from '@almond/ui';

const StyledPage = styled.div`
	.page {
	}
`;

export function Index() {
	/*
	 * Replace the elements below with your own.
	 *
	 * Note: The corresponding styles are in the ./index.@emotion/styled file.
	 */
	return (
		<StyledPage>
			<div className="wrapper">
				<div className="container">
					<div id="welcome">
						<h1>
							<span> Hello there, </span>
							Welcome site 👋
						</h1>
						<Logo />
					</div>
				</div>
			</div>
		</StyledPage>
	);
}

export default Index;
