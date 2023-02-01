import styled from 'styled-components';

const CartShareModal = ({ changeCartShareModalOn }) => {
    return (
        <Container>
            <Modal>
                <div>
                    담기 완료 상태에서는<br></br>상품 옵션 변경이 불가합니다.
                </div>

                <div>장바구니 하단에 상품 더 담기 버튼을 눌러주세요.</div>
                <ButtonContainer>
                    <OkButton onClick={changeCartShareModalOn}>확인</OkButton>
                </ButtonContainer>
            </Modal>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 989;
    background-color: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
    width: 300px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    > div:nth-child(1) {
        width: 100%;
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
    }

    > div:nth-child(2) {
        width: 100%;
        font-size: 12px;
        color: #888888;
        text-align: center;
        margin-top: 20px;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: none;
    margin-top: 23px;
    border-top: solid 1px #f2f2f2;
`;

const OkButton = styled.button`
    width: 100%;
    background-color: white;
    padding: 13px;
    border: none;
    cursor: pointer;
    color: black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export default CartShareModal;
