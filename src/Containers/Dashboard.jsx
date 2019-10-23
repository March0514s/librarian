import React, { useState, useEffect } from "react";
import firebase from "../Components/Firebase/Firebase";
import { Auth } from '../Context/authContext';
import { Redirect } from 'react-router-dom';

import CardWindow from "../Components/CardWindow";
import ModalTarget from "../Components/ModalTarget";
import WelcomeMessage from "../Components/WelcomeMessage";
import SettingsScreen from "./SettingsScreen";

//MUI
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";


//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faCamera, faReceipt, faCoins, faHome, faMedkit,
         faCar, faMale, faChild, faPaw, faAngleLeft, faAngleRight, faPowerOff, 
         faUserCircle, faHandHoldingUsd, faUmbrellaBeach } 
from "@fortawesome/free-solid-svg-icons" ;

// Table test objects
const incomeTable = {
  tableName: "Income",
  tableIcon: faHandHoldingUsd,
  tableRows: [
    {
      name: "Salário",
      value: 0
    },
    {
      name: "13º Salário",
      value: 0
    },
    {
      name: "Férias",
      value: 0
    },
    {
      name: "Aluguéis",
      value: 0
    },
    {
      name: "Resgate",
      value: 0
    },
    {
      name: "Renda Extra",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const financialTable = {
  tableName: "Financial Expenses",
  tableIcon: faCoins,
  tableRows: [
    {
      name: "Ações",
      value: 0
    },
    {
      name: "LCI, LCA, CDB",
      value: 0
    },
    {
      name: "Previdência Privada",
      value: 0
    },
    {
      name: "Fundos de Investimentos",
      value: 0
    },
    {
      name: "Tesouro Direto",
      value: 0
    },
    {
      name: "Empréstimos (pagos)",
      value: 0
    },
    {
      name: "Tarifas Bancárias",
      value: 0
    },
    {
      name: "Outro",
      value: 0
    }
  ]
};

const housingTable = {
  tableName: "Housing Expenses",
  tableIcon: faHome,
  tableRows: [
    {
      name: "Aluguel/Prestação",
      value: 0
    },
    {
      name: "Condomínio",
      value: 0
    },
    {
      name: "IPTU",
      value: 0
    },
    {
      name: "Luz",
      value: 0
    },
    {
      name: "Telefones",
      value: 0
    },
    {
      name: "Internet",
      value: 0
    },
    {
      name: "Gás",
      value: 0
    },
    {
      name: "TV por assinatura/Netflix",
      value: 0
    },
    {
      name: "Supermercado/feira/açougue/padaria",
      value: 0
    },
    {
      name: "Empregados",
      value: 0
    },
    {
      name: "Reforma/Consertos",
      value: 0
    },
    {
      name: "Seguro de casa",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const healthTable = {
  tableName: "Health Expenses",
  tableIcon: faMedkit,
  tableRows: [
    {
      name: "Plano de Saúde",
      value: 0
    },
    {
      name: "Médico",
      value: 0
    },
    {
      name: "Dentista",
      value: 0
    },
    {
      name: "Terapia",
      value: 0
    },
    {
      name: "Medicamentos",
      value: 0
    },
    {
      name: "Exames",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const transportTable = {
  tableName: "Transport Expenses",
  tableIcon: faCar,
  tableRows: [
    {
      name: "Ônibus/Metrô/Trem",
      value: 0
    },
    {
      name: "Táxi/Uber",
      value: 0
    },
    {
      name: "Prestação",
      value: 0
    },
    {
      name: "Seguro de carro/moto",
      value: 0
    },
    {
      name: "Combustível",
      value: 0
    },
    {
      name: "Lavagens",
      value: 0
    },
    {
      name: "IPVA/DPVAT/Licenciamento",
      value: 0
    },
    {
      name: "Mecânico",
      value: 0
    },
    {
      name: "Multas",
      value: 0
    },
    {
      name: "Estacionamentos",
      value: 0
    },
    {
      name: "Pedágios/Sem Parar",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const personalTable = {
  tableName: "Personal Expenses",
  tableIcon: faMale,
  tableRows: [
    {
      name: "Higiene Pessoal",
      value: 0
    },
    {
      name: "Cosméticos",
      value: 0
    },
    {
      name: "Cabelereiro",
      value: 0
    },
    {
      name: "Vestuário",
      value: 0
    },
    {
      name: "Lavanderia",
      value: 0
    },
    {
      name: "Academia",
      value: 0
    },
    {
      name: "Cursos",
      value: 0
    },
    {
      name: "Presentes",
      value: 0
    },
    {
      name: "Doações",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const dependantTable = {
  tableName: "Dependant Expenses",
  tableIcon: faChild,
  tableRows: [
    {
      name: "Escola/faculdade",
      value: 0
    },
    {
      name: "Cursos extras",
      value: 0
    },
    {
      name: "Material escolar",
      value: 0
    },
    {
      name: "Esportes/Uniformes",
      value: 0
    },
    {
      name: "Mesada",
      value: 0
    },
    {
      name: "Passeios/Férias",
      value: 0
    },
    {
      name: "Vestuário",
      value: 0
    },
    {
      name: "Saúde/Medicamentos",
      value: 0
    },
    {
      name: "Transporte",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const petTable = {
  tableName: "Pet Expenses",
  tableIcon: faPaw,
  tableRows: [
    {
      name: "Petshop",
      value: 0
    },
    {
      name: "Ração",
      value: 0
    },
    {
      name: "Veterinário",
      value: 0
    },
    {
      name: "Medicamentos",
      value: 0
    },
    {
      name: "Vacinas",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const leisureTable = {
  tableName: "Leisure Expenses",
  tableIcon: faUmbrellaBeach,
  tableRows: [
    {
      name: "Restaurantes",
      value: 0
    },
    {
      name: "Café/Sorveteria",
      value: 0
    },
    {
      name: "Bares/Boates",
      value: 0
    },
    {
      name: "Livraria",
      value: 0
    },
    {
      name: "Passagens",
      value: 0
    },
    {
      name: "Hotéis",
      value: 0
    },
    {
      name: "Passeios",
      value: 0
    },
    {
      name: "Outros",
      value: 0
    }
  ]
};

const style = theme => ({
  root: {
    display: "flex",
    height: "100%"
  },
  drawer: {
    width: "280px",
    hidden: "true"
  },
  chartGroup: {
    "& p": {
      marginLeft: "20px",
      marginTop: "10px"
    },
    "& svg": {
      marginLeft: "10px"
    }
  },
  smallAvatar: {
    width: 60,
    height: 60,
  },
  monthSelector: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    marginBottom: "15px"
  },
  chartSubgroup: {
    "& p": {
      marginLeft: "15px",
      marginTop: "8px",
      marginBottom: "8px"
    },
    "& svg": {
      marginLeft: "30px"
    }
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  container: {
    marginLeft: "235px",
    marginTop: "20px"
  },
  powerOffButton: {
    position: "absolute",
    top: "5px",
    left: "165px"
  }
});

const GroupButton = withStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom: "10px"
  }
}))(Button);

const SubgroupButton = withStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start"
  }
}))(Button);

const primary = "rgb(206, 197, 70)";

function Dashboard(props) {
  const { classes } = props;

  const [userState, setUserState] = useState(null);
  const {state, dispatch} = React.useContext(Auth);

  //TODO: Move hook to <App> and save its data into context
  useEffect(() => {
    console.log(state);
    firebase.getUserState().then(user => {
      if (user) {
        setUserState(user);
      }
    });
  }, []);

  const logout = () => {
    firebase.logout();
    setUserState(null);
    props.history.replace("/login");
    return dispatch({
      type: "LOGOUT",
      payload: {}
    });
  };

  //TODO:Get user data from context for each component that requires

  const [open, setOpen] = useState(null);

  const handleView = category => {
    setOpen(category);
  };

  const handleClose = category => {
    setOpen(null);
  };

  // console.log(firebase.getCurrentUserCreationTime());


  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawer
        }}
        anchor="left"
      >
        <div className={classes.avatar}>
          <IconButton size="small" onClick={() => handleView("settings")}>
            {/* <FontAwesomeIcon icon={faUserCircle} size="3x" color={primary} /> */}
            <Avatar
          alt={state.user.name}
          src={ state.user.photoURL ? state.user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }
          className={classes.smallAvatar}
        />
          </IconButton>
          <IconButton
            className={classes.powerOffButton}
            aria-label="settings"
            size="small"
          >
            <FontAwesomeIcon icon={faPowerOff} onClick={() => logout()}/>
          </IconButton>
        </div>
        <div className={classes.monthSelector}>
          <FontAwesomeIcon onClick={() => console.log('previous')}icon={faAngleLeft} size="2x" color={primary}/>
          <Typography variant="h6">SET/2019</Typography>
          <FontAwesomeIcon onClick={() => console.log('next')}icon={faAngleRight} size="2x" color={primary}/>
        </div>
        <Divider />
        <div className={classes.chartGroup}>
          <GroupButton
            fullWidth
            size="small"
            onClick={() => handleView("income")}
          >
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              size="2x"
              color={primary}
            />
            <Typography variant="body1">Income</Typography>
          </GroupButton>
          <div>
            <GroupButton
              fullWidth
              size="small"
              onClick={() => handleView("expenses")}
            >
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                size="2x"
                color={primary}
              />
              <Typography variant="body1">Expenses</Typography>
            </GroupButton>
            <div className={classes.chartSubgroup}>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("financial")}
              >
                <FontAwesomeIcon icon={faCoins} size="2x" color={primary} />
                <Typography variant="body1">Financial</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("housing")}
              >
                <FontAwesomeIcon icon={faHome} size="2x" color={primary} />
                <Typography variant="body1">Housing</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("health")}
              >
                <FontAwesomeIcon icon={faMedkit} size="2x" color={primary} />
                <Typography variant="body1">Health</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("transport")}
              >
                <FontAwesomeIcon icon={faCar} size="2x" color={primary} />
                <Typography variant="body1">Transport</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("personal")}
              >
                <FontAwesomeIcon icon={faMale} size="2x" color={primary} />
                <Typography variant="body1">Personal</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("dependant")}
              >
                <FontAwesomeIcon icon={faChild} size="2x" color={primary} />
                <Typography variant="body1">Dependant</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("pet")}
              >
                <FontAwesomeIcon icon={faPaw} size="2x" color={primary} />
                <Typography variant="body1">Pet</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("leisure")}
              >
                <FontAwesomeIcon
                  icon={faUmbrellaBeach}
                  size="2x"
                  color={primary}
                />
                <Typography variant="body1">Leisure</Typography>
              </SubgroupButton>
            </div>
          </div>
          <GroupButton disabled fullWidth size="small">
            <FontAwesomeIcon icon={faCamera} size="2x" color={primary} />
            <Typography variant="body1">Capture</Typography>
          </GroupButton>
          <GroupButton disabled fullWidth size="small">
            <FontAwesomeIcon icon={faReceipt} size="2x" color={primary} />
            <Typography variant="body1">Process</Typography>
          </GroupButton>
        </div>
      </Drawer>
      <Container className={classes.container}>
        {open === "income" && (
          <CardWindow table={incomeTable} close={handleClose} />
        )}
        {open === "financial" && (
          <CardWindow table={financialTable} close={handleClose} />
        )}
        {open === "housing" && (
          <CardWindow table={housingTable} close={handleClose} />
        )}
        {open === "health" && (
          <CardWindow table={healthTable} close={handleClose} />
        )}
        {open === "transport" && (
          <CardWindow table={transportTable} close={handleClose} />
        )}
        {open === "personal" && (
          <CardWindow table={personalTable} close={handleClose} />
        )}
        {open === "dependant" && (
          <CardWindow table={dependantTable} close={handleClose} />
        )}
        {open === "pet" && <CardWindow table={petTable} close={handleClose} />}
        {open === "leisure" && (
          <CardWindow table={leisureTable} close={handleClose} />
        )}
        {open === "expenses" && (
          <div>
            <CardWindow table={financialTable} />
            <CardWindow table={housingTable} />
            <CardWindow table={healthTable} />
            <CardWindow table={transportTable} />
            <CardWindow table={personalTable} />
            <CardWindow table={dependantTable} />
            <CardWindow table={petTable} />
            <CardWindow table={leisureTable} />
          </div>
        )}
        {open === null && <WelcomeMessage />}
        {open === "settings" && <SettingsScreen />}
      </Container>
    </div>
  );
}

export default withStyles(style)(Dashboard);
