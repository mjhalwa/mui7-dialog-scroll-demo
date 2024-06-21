import './App.css';
import {useState} from 'react';

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Checkbox,
  TextField,
  Card,
  FormControlLabel,
  CardHeader,
  CardContent,
  Collapse,
  Button,
} from '@mui/material';

const LONG_SIZE = 30;

function getArray(size) {
  return Array.apply(null, Array(size)).map(() => "hello")
}

function App() {
  const [openCollapse, setOpenCollapse] = useState(true)
  const [dynamicContent, setDynamicContent] = useState(getArray(LONG_SIZE))
  const [applyFix, setApplyFix] = useState(true);

  return (
    <div className="App">
      <Dialog
        maxWidth={"md"}
        open={true}
        PaperProps={{
          sx: {
            maxHeight: "90vh",
          },
        }}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          Dialog Title
          <FormControlLabel
            sx={{
              flexDirection: "row-reverse", // checkbox label on the left
            }}
            control={
              <Checkbox checked={applyFix} onChange={(e) => setApplyFix(e.target.checked)}/>
            }
            
            label={"apply fix"}
            />
        </DialogTitle>
        <DialogContent
          sx={
            applyFix ? {
              display: 'flex',
              flexDirection: 'column',
            }
            :
            {}
          }>
          <Box
            sx={
              {
                display: "flex",
                flexDirection: "column",  
                ...(
                  applyFix ? {
                    overflow: "auto", // Ensure scrollbar first on card, then here
                  }
                  :
                  {}
                )
              }}>
            <Typography>
              Example dialog to demonstrate a challenge with the scrollbar in MUI 7 (v5.15.20).
              The dialog should have a maximum height of 90vh.
              If content grows the dialog content will get a scrollbar per default.
              Instead we want the scrollbar to appear on the card content to keep buttons below visible without scrolling
            </Typography>
            <TextField label={"Demo input 1"}/>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}>
              <TextField label={"Demo input 2"}/>
              <TextField label={"Demo input 3"}/>
            </Box>
            <Collapse
              in={openCollapse}
              sx={
                applyFix ? {
                  display: "flex",
                  flexDirection: "column",
                  "& .MuiCollapse-wrapper": {
                    overflow: "hidden", // required to pass on the scroll to child
                  },
                  "& .MuiCollapse-wrapperInner": {
                    display: "flex",
                    flexDirection: "column",
                  }
                }
                :
                {}
              }>
              <Card
                sx={
                  applyFix ? {
                    display: "flex",
                    flexDirection: "column",
                  }
                  :
                  {}
                }>
                <CardHeader title={"Card Title (scrollbar should be below this)"}></CardHeader>
                <CardContent
                  sx={{
                    overflowY: "auto",
                  }}>
                  {
                    dynamicContent.map((val, index) => <Typography key={index}>{val}</Typography>)
                  }
                </CardContent>
              </Card>
            </Collapse>
            <Box>
              <Button onClick={() => setOpenCollapse(openCollapse ? false : true)}>toggle Collapse</Button>
              <Button onClick={() => setDynamicContent(dynamicContent.length > 1 ? getArray(1) : getArray(LONG_SIZE))}>toggle list length</Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
