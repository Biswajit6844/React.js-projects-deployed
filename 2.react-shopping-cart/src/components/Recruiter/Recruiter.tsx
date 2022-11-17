import netherlandsRecruiter from './jeremy-akeze-doghouse-it-recruitment.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="WhatsAppphoto"
        src={netherlandsRecruiter}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        Work in the ECommerce Website 
        <S.Flag />
      </h4>
      <p>
        Hi! I'm Biswajit  Sethy  and I'm looking for
        skilled Software Engineers like you. ,{' '}
        <a href="https://www.linkedin.com/in/biswajit-sethy-58b132193/">
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
