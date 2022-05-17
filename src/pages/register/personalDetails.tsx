import { useState, Fragment, ChangeEvent, MouseEvent, ReactNode, useEffect } from "react";
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
import { Language, Expertise } from "src/configs/constants";
import { Autocomplete, Grid } from "@mui/material";
import { signUp } from "src/app/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from 'src/app/store';
import { useRouter } from "next/router";

interface State {
  firstName: string,
  lastName: string,
  bio: string,
  language: any,
  expertise: any,
  teachFeeMin: number,
  teachFeeMax: number,
  teachAvgFee: number,
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

const GetUserInfo = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const {user, error} = useSelector((state: RootState) => state.auth);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    language: [],
    expertise: [],
    teachFeeMax: null,
    teachFeeMin: null,
    teachAvgFee: null,
  });

  const handleChange = (prop: any) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleLanguageChange = (event: any) => {
    setValues({ ...values, language: event });
  };

  const handleExpertiseChange = (event: any) => {
    setValues({ ...values, expertise: event });
  };

  const handleSubmit = () => {
    dispatch(signUp(values));
  }
  useEffect(() => {
    if (user) {
      console.log(user);
      router.push("/feed");
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }}, [error]);


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
          <Grid container >
            <Grid item xs={12} sm={6}>
           <TextField autoFocus fullWidth id='firstname' label='First name' sx={{ my: 2, mr: 2 }} onChange={handleChange('firstName')} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField autoFocus fullWidth id='lastname' label='Last name' sx={{ my: 2, ml: 2 }} onChange={handleChange('lastName')} />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
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
              <TextField {...params} label="Language known" variant="outlined" sx={{ marginBottom: 2 }} />
            )}
          />
            </Grid>
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
            <Grid item xs={12}>
          <TextField
            id="teachAvgFee"
            fullWidth
            label="Teach Avg. Fee"
            type="number"
            sx={{ marginBottom: 4, mt: 2 }}
            onChange={handleChange("teachAvgFee")}
          />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{ marginBottom: 7, mt: 2 }}
            onClick={() => handleSubmit()}
          >
            Save & Continue
          </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  );
};

GetUserInfo.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default GetUserInfo;
