import { Box, Button, Typography, Link } from '@mui/material';
import GoogleIcon from '../icons/GoogleIcon';
import AppleIcon from '../icons/AppleIcon';

const LandingPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#fff' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden', flexGrow: 1 }}>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt="X Logo" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '0 20px' }}>
          <Typography variant="h1" sx={{ fontFamily: 'Anton, sans-serif', fontSize: '5rem', fontWeight: '670' }}>
            Happening now
          </Typography>

          <Typography variant="h4" sx={{ marginTop: '35px', fontFamily: 'Anton, sans-serif', fontSize: '2rem', fontWeight: '760' }}>
            Join today.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px', marginBottom: '20px' }}>
            <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ width: '100%', marginBottom: '10px', color: '#5f6368', borderRadius: '25px', paddingLeft: '60px', paddingRight: '60px', borderColor: '#E0E0E0', textTransform: 'none' }}>
              Signup with Google
            </Button>
            <Button variant="outlined" startIcon={<AppleIcon />} sx={{ width: '100%', marginBottom: '10px', fontWeight: 'bold', color: 'black', borderRadius: '25px', paddingLeft: '60px', paddingRight: '60px', borderColor: '#E0E0E0', textTransform: 'none' }}>
              Signup with Apple
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
              <Box sx={{ flex: '1', height: '1px', backgroundColor: '#E0E0E0' }}></Box>
              <Typography variant="body1" sx={{ margin: '0 15px', color: '#000000', fontSize: '1.2em', fontFamily: 'Arial' }}>
                or
              </Typography>
              <Box sx={{ flex: '1', height: '1px', backgroundColor: '#E0E0E0' }}></Box>
            </Box>

            <Button variant="outlined" sx={{ width: '100%', fontWeight: 'bold', paddingLeft: '60px', paddingRight: '60px', borderRadius: '25px', backgroundColor: '#2196f3', color: '#ffffff', borderColor: '#E0E0E0', }}>
              Create Account
            </Button>
            <Typography variant="body2" sx={{ fontSize: '0.8em', fontWeight: 'lighter', color: '#333333', marginTop: '8px' }}>
              By signing up, you agree to the <Link href="#" sx={{ textDecoration: 'none' }}>Terms of Service</Link> and <Link href="#" sx={{ textDecoration: 'none' }}>Privacy <br /> Policy</Link>, including <Link href="#" sx={{ textDecoration: 'none' }}>Cookie Use</Link>.
            </Typography>

            <Typography variant="h7" sx={{ fontWeight: 'bold', marginTop: '50px' }}>
              Already have an account?
            </Typography>
            <Button variant="outlined" sx={{ textTransform: 'none', marginTop: '25px', width: '100%', fontWeight: 'bold', paddingLeft: '50px', paddingRight: '50px', borderRadius: '25px', color: '#2196f3', borderColor: '#E0E0E0', }}>
              Sign in
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#fff', flexShrink: 0 }}>
        <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '0.8em', color: '#808080', marginBottom: '10px' }}>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>About</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Download the X app</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Help Center</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Terms of Service</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Privacy Policy</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Cookie Policy</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Accessibility</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Ads info</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Blog</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Careers</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Brand Resources</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Advertising</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Marketing</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>X for Business</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Developers</Link>
          <br />
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Directory</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '15px' }}>Settings</Link>
          <Link href="#" underline="none" sx={{ color: '#808080', marginRight: '0px' }}>© 2024 X Corp.</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
