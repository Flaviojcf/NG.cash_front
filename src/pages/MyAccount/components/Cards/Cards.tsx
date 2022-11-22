import { useAuthContext } from "../../../../hooks/useAuthContext";
import {
  CardDetailsContainer,
  CardNumberContainer,
  CardValidateContainer,
  Container,
  Content,
  NgContainer,
} from "./styles";

export function Cards() {
  const { username } = useAuthContext();
  return (
    <Container>
      <Content>
        <NgContainer>
          <span>
            <img src="ng-logo.png" />
            <p>Credit Card</p>
            <img src="chip.png" />
          </span>
        </NgContainer>
        <CardDetailsContainer>
          <CardNumberContainer>
            <p>Card Number</p>
            <p>1212 1212 1212 1212</p>
            <p>{username}</p>
          </CardNumberContainer>
          <CardValidateContainer>
            <p>Valid Thru</p>
            <p>12/26</p>
          </CardValidateContainer>
        </CardDetailsContainer>
      </Content>

      <Content>
        <NgContainer>
          <span>
            <img src="ng-logo.png" />
            <p>Debit Card</p>
            <img src="chip.png" />
          </span>
        </NgContainer>
        <CardDetailsContainer>
          <CardNumberContainer>
            <p>Card Number</p>
            <p>2121 2121 2121 2121</p>
            <p>{username}</p>
          </CardNumberContainer>
          <CardValidateContainer>
            <p>Valid Thru</p>
            <p>12/25</p>
          </CardValidateContainer>
        </CardDetailsContainer>
      </Content>
    </Container>
  );
}
