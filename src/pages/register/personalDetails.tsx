import { useState, Fragment, ChangeEvent, MouseEvent, ReactNode } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";
import themeConfig from "src/configs/themeConfig";
import BlankLayout from "src/@core/layouts/BlankLayout";
import FooterIllustrationsV1 from "src/views/pages/FooterIllustration";
import MuiFormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";
import Logo from "src/layouts/components/Logo";
import { Language, Expertise } from "src/configs/constants";
import { Autocomplete, Grid } from "@mui/material";

interface State {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  showPassword: boolean,
}

const Card =
  styled(MuiCard) <
  CardProps >
  (({ theme }) => ({
    [theme.breakpoints.up("sm")]: { width: "28rem" },
  }));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel =
  styled(MuiFormControlLabel) <
  FormControlLabelProps >
  (({ theme }) => ({
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(4),
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  }));

const GetUserInfo = () => {
  const [values, setValues] = useState({
    bio: "",
    googleUid: "",
    language: [],
    expertise: [],
    teachFeeMax: "",
    teachFeeMin: "",
    teachAvgFee: "",
    showPassword: false,
  });

  const theme = useTheme();

  const handleChange = (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleLanguageChange = (event: any) => {
    setValues({ ...values, language: event });
  };

  const handleExpertiseChange = (event: any) => {
    setValues({ ...values, expertise: event });
  };
  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 6, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography
              variant="h6"
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.5rem !important",
              }}
            >
              <img src="/logo.png" alt="logo" height="25px" />
              {themeConfig.appName.slice(1)}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 400, my: 2 }}>
              Create your account
            </Typography>
          </Box>
          <Autocomplete
            id="expertise"
            options={Expertise}
            multiple
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            onChange={(event, newValue) => handleExpertiseChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Expertise"
                variant="outlined"
                sx={{ marginBottom: 4 }}
                onChange={handleChange("expertise")}
              />
            )}
          />
          <Autocomplete
            id="language"
            multiple
            options={Language}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            onChange={(event, newValue) => {
              handleLanguageChange(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Language known" variant="outlined" sx={{ marginBottom: 4 }} />
            )}
          />
          <Grid container>
            <Grid item xs={6}>
              <TextField
                id="teachFeeMin"
                label="Min. Teach Fee"
                type="number"
                sx={{ my: 2, mr: 2 }}
                onChange={handleChange("teachFeeMin")}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="teachFeeMax"
                label="Max. Teach Fee"
                type="number"
                sx={{ my: 2, ml: 2 }}
                onChange={handleChange("teachFeeMax")}
              />
            </Grid>
          </Grid>
          <TextField
            id="teachAvgFee"
            fullWidth
            label="Teach Avg. Fee"
            type="number"
            sx={{ marginBottom: 4, mt: 2 }}
            onChange={handleChange("teachAvgFee")}
          />
          <TextField
            minRows={3}
            multiline
            autoFocus
            fullWidth
            id="bio"
            label="bio"
            sx={{ marginBottom: 4 }}
            onChange={handleChange("bio")}
          />
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{ marginBottom: 7, mt: 2 }}
            onClick={() => alert("under construction")}
          >
            Save & Continue
          </Button>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  );
};

GetUserInfo.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default GetUserInfo;
