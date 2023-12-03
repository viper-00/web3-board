import Header from 'components/Common/Header';
import SidebarWithHeader from 'components/Navigation/Sidebar';
import WalletPage from '../Wallet';

const Portfolio = () => {
  return (
    <>
      <Header pageName="portfolio">
        <SidebarWithHeader>
          <WalletPage />
        </SidebarWithHeader>
      </Header>
    </>
  );
};

export default Portfolio;
