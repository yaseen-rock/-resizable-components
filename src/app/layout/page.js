'use client'

// components/ResizableLayout.js
import React , {useState, useEffect} from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Card, CardContent, Typography, Button,TextField,Badge} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

// SVG icon data
const icon1 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 32 32">
    <path fill="currentColor" fillRule="evenodd" d="M15.5 11.916L27 5.278L19.5.938a7 7 0 0 0-7 0l-8 4.62A7 7 0 0 0 1 11.62v9.237a7 7 0 0 0 3.5 6.061l7.5 4.33V17.98a7 7 0 0 1 3.5-6.062zM10 27.786v-9.809a9 9 0 0 1 4.5-7.792l8.503-4.91L18.5 2.67a5 5 0 0 0-5 0l-8 4.619A5 5 0 0 0 3 11.62v9.238a5 5 0 0 0 2.5 4.33z"/>
    <path fill="currentColor" fillRule="evenodd" d="M18.409 13.55a7 7 0 0 1 1.035 1.711A6.9 6.9 0 0 1 20 17.98v13.27l7.5-4.33a7 7 0 0 0 3.5-6.061V11.62a7 7 0 0 0-1.587-4.422zm2.777.705A8.9 8.9 0 0 1 22 17.979v9.807l4.5-2.597a5 5 0 0 0 2.5-4.33V11.62c0-.588-.106-1.161-.303-1.7z" class="ouiIcon__fillSecondary"/>
  </svg>
);

const icon2 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 32 32"><path fill="currentColor" d="M25 16c0-1.5-1.2-2.8-2.7-3c-1.1-2.4-3.5-4-6.3-4c-.2 0-.5 0-.7.1C14.7 8.4 13.9 8 13 8c-1.7 0-3 1.3-3 3c0 .4.1.7.2 1.1Q9 13.75 9 16c0 2.25.4 2.8 1.2 3.9c-.1.4-.2.7-.2 1.1c0 1.7 1.3 3 3 3c.9 0 1.7-.4 2.3-1.1c.2 0 .5.1.7.1c2.8 0 5.2-1.7 6.3-4c1.5-.2 2.7-1.5 2.7-3m-12-6c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 12c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3-1c0-1.7-1.3-3-3-3c-.5 0-1 .1-1.4.4Q11 17.35 11 16c0-1.35.2-1.7.6-2.4c.4.3.9.4 1.4.4c1.7 0 3-1.3 3-3c1.9 0 3.4 1 4.3 2.5c-.8.6-1.3 1.5-1.3 2.5s.5 1.9 1.3 2.5C19.4 20 17.9 21 16 21m6-4c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"/><path fill="currentColor" d="M16 31c-.2 0-.3 0-.5-.1l-12-7c-.3-.2-.5-.5-.5-.9V9c0-.4.2-.7.5-.9l12-7c.3-.2.7-.2 1 0l12 7l-1 1.7L16 3.2L5 9.6v12.9l11 6.4l11-6.4V15h2v8c0 .4-.2.7-.5.9l-12 7c-.2.1-.3.1-.5.1"/><path fill="none" d="M0 0h32v32H0z"/></svg>
);

const icon3 = (
  <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 32 32"><circle cx="4" cy="22" r="2" fill="currentColor"/><path fill="currentColor" d="M13.5 30a9.53 9.53 0 0 1-7.73-3.977l1.626-1.164A7.52 7.52 0 0 0 13.5 28c3.969 0 7.258-3.1 7.487-7.058l1.997.116C22.694 26.072 18.527 30 13.5 30"/><circle cx="28" cy="23" r="2" fill="currentColor"/><path fill="currentColor" d="m30.641 19.095l-1.924-.545A7.5 7.5 0 0 0 29 16.5c0-4.135-3.364-7.5-7.5-7.5a7.4 7.4 0 0 0-3.088.663l-.824-1.822A9.4 9.4 0 0 1 21.5 7c5.238 0 9.5 4.262 9.5 9.5c0 .88-.12 1.754-.359 2.595m-10.227-4.51l-3-3C17.037 11.209 16.534 11 16 11s-1.037.208-1.414.586l-3 3c-.39.39-.586.902-.586 1.414s.196 1.024.586 1.414l3 3c.377.378.88.586 1.414.586s1.037-.208 1.414-.586l3-3c.39-.39.586-.902.586-1.414s-.196-1.024-.586-1.414M16 19l-3-3l3-3l3 3z"/><circle cx="16" cy="3" r="2" fill="currentColor"/><path fill="currentColor" d="M8.025 19.882A9.49 9.49 0 0 1 3 11.5c0-5.027 3.928-9.193 8.942-9.484l.116 1.997a7.502 7.502 0 0 0-3.089 14.105z"/></svg>
);

const ResizableLayout = () => {
  const [dragEnabled, setDragEnabled] = useState(true);
  const [feedbackData, setFeedbackData] = useState([]);
  const [addBadgeCounts, setAddBadgeCounts] = useState([0, 0, 0]);
  const [updateBadgeCounts, setUpdateBadgeCounts] = useState([0, 0, 0]);

  const [feedback1, setFeedback1] = useState('');
  const [feedback2, setFeedback2] = useState('');
  const [feedback3, setFeedback3] = useState('');

  const [layout, setLayout] = useState([
    { i: '1', x: 0, y: 0, w: 3.9, h: 2.6 },
    { i: '2', x: 4, y: 0, w: 3.9, h: 2.6 },
    { i: '3', x: 8, y: 0, w: 3.9, h: 2.6 },
  ]);

  useEffect(() => {
    // Fetch data from the API endpoint when the component mounts
    fetchFeedbackData();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up function to remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    // Update layout based on window width
    const newLayout = [
      { i: '1', x: window.innerWidth < 1200 ? 0 : 0, y: 0, w: 3.9, h: 2.6 },
      { i: '2', x: window.innerWidth < 1200 ? 0 : 4, y: 0, w: 3.9, h: 2.6 },
      { i: '3', x: window.innerWidth < 1200 ? 0 : 8, y: 0, w: 3.9, h: 2.6 },
    ];
    setLayout(newLayout);
  };

  const fetchFeedbackData = async () => {
    try {
      const response = await fetch('api/users');
      const data = await response.json();
      console.log('Feedback data received:', data);
      if (Array.isArray(data) && data.length >= 3) {
        setFeedbackData(data);
        setFeedback1(data[0].about);
        setFeedback2(data[1].about);
        setFeedback3(data[2].about);
      }
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  const handleFeedbackChange = (event, feedbackSetter) => {
    feedbackSetter(event.target.value);
  };

  const handleAddFeedback = async (feedbackData, index) => {
    try {
      const response = await fetch('api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ about: feedbackData }),
      });
      const data = await response.json();
      console.log('Feedback added successfully:', data);
      // Increment the corresponding badge count
      setAddBadgeCounts(prevCounts => {
        const newCounts = [...prevCounts];
        newCounts[index] += 1;
        return newCounts;
      });

      fetchFeedbackData();

    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  const handleUpdateFeedback = async (id, feedbackData, index) => {
    try {
      const response = await fetch(`api/users`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id , about: feedbackData }),
      });
      const data = await response.json();
      console.log('Feedback updated successfully:', data);
      // Increment the corresponding badge count
      
      setUpdateBadgeCounts(prevCounts => {
        const newCounts = [...prevCounts];
        newCounts[index] += 1;
        return newCounts;
      });
      // Fetch updated feedback data
      fetchFeedbackData();

    } catch (error) {
      console.error('Error updating feedback:', error);
    }
  };

  
 

  const onLayoutChange = (layout) => {
    // Handle layout change here
    console.log(layout);
  };
  const handleButtonClick = () => {
    // Disable drag functionality temporarily
    setDragEnabled(false);

    // Log a message to the console
    console.log('Button clicked');

    // Re-enable drag functionality after a slight delay
    setTimeout(() => {
      setDragEnabled(true);
    }, 100);
  };

  const handleClearFeedback = (setFeedback) => {
    setFeedback('');
    setDragEnabled(false);
    setTimeout(() => {
      setDragEnabled(true);
    }, 100); // Disable drag functionality
  };
  
  const preventDefault = (event) => event.preventDefault(); // To prevent the TextField from losing focus when clicking the clear icon
  

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={200}
      width={1200}
      onLayoutChange={onLayoutChange}
      resizeHandles={['s', 'e', 'n', 'w', 'se', 'sw', 'ne', 'nw']}
      draggableCancel="button"
      isDraggable={dragEnabled}
    >
      <div key="1">
        <Card style={{ height: '100%' }}>
          <CardContent style={{ padding: '16px', marginTop: '26px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {icon1}
            <Typography gutterBottom variant="h5" component="div" style={{ marginTop: '26px' }}>
              Annotation as accurate as pre-trained LLMs or HITL
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
              DataNeuron augments human expertise through various approaches like recognize vs recall with the proprietary ensemble models (unsupervised, semi-supervised and supervised) to achieve comparable/ better accuracies to HITL and pre-trained LLMs.
            </Typography>
            <TextField
  label="Feedback"
  variant="outlined"
  value={feedback1}
  onChange={(event) => handleFeedbackChange(event, setFeedback1)}
  fullWidth
  style={{ marginBottom: '16px', marginTop: '40px', position: 'relative' }}
  InputProps={{
    endAdornment: (
      <IconButton
        onClick={() => handleClearFeedback(setFeedback1)}
        onMouseDown={preventDefault}
        edge="end"
        style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}
      >
         <ClearIcon fontSize="small" />
      </IconButton>
    )
  }}
/>
              <Badge badgeContent={addBadgeCounts[0]} color="secondary">
              <Button variant="contained" color="primary" onClick={() => handleAddFeedback(feedback1, 0)}  style={{ marginBottom: '5px'}}>
                Add
              </Button>
            </Badge>
            <Badge badgeContent={updateBadgeCounts[0]} color="secondary" style={{ marginLeft: '8px' }}>
              <Button variant="contained" color="secondary" onClick={() => handleUpdateFeedback(feedbackData[0]._id, feedback1, 0)}>
                Update
              </Button>
            </Badge>


          </CardContent>
        </Card>
      </div>
      <div key="2">
        <Card style={{ height: '100%' }}>
          <CardContent style={{ padding: '16px', marginTop: '26px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {icon2}
            <Typography gutterBottom variant="h5" component="div" style={{ marginTop: '26px' }}>
              DataNeuron DSEAL: Strategic Annotation
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
              DSEAL is a proprietary algorithm developed by DataNeuron scientists to achieve state-of-the-art accuracy with the smallest data sample size possible while utilizing the full potential of active-learning methods. DSEAL integrates seamlessly with Traditional ML models and LLMs.
            </Typography>
            <TextField
              label="Feedback"
              variant="outlined"
              value={feedback2}
              onChange={(event) => handleFeedbackChange(event, setFeedback2)}
              fullWidth
              style={{ marginBottom: '16px', marginTop:'20px' }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => handleClearFeedback(setFeedback2)}
                    onMouseDown={preventDefault}
                    edge="end"
                    style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}
                  >
                     <ClearIcon fontSize="small" />
                  </IconButton>
                )
              }}
            />
           <Badge badgeContent={addBadgeCounts[1]} color="secondary">
        <Button variant="contained" color="primary" onClick={() => handleAddFeedback(feedback2, 1)} style={{ marginBottom: '5px'}}>
          Add
        </Button>
      </Badge>
      <Badge badgeContent={updateBadgeCounts[1]} color="secondary" style={{ marginLeft: '8px' }}>
        <Button variant="contained" color="secondary" onClick={() => handleUpdateFeedback(feedbackData[1]._id, feedback2, 1)}>
          Update
        </Button>
      </Badge>
          </CardContent>
        </Card>
      </div>
      <div key="3">
        <Card style={{ height: '100%' }}>
          <CardContent style={{ padding: '16px', marginTop: '26px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {icon3}
            <Typography gutterBottom variant="h5" component="div" style={{ marginTop: '26px' }}>
              Automated Model Training / Fine-Tuning & Deployment
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ marginTop: '20px' }}>
              Once the Data Labeling is complete using DataNeuron automate the model training/ fine-tuning pipeline with a no-code workflow. Platform also provides ready-to-use API for prediction and integration with AI products. It further captures the feedback for model improvements / versioning.
            </Typography>
            <TextField
              label="Feedback"
              variant="outlined"
              value={feedback3}
              onChange={(event) => handleFeedbackChange(event, setFeedback3)}
              fullWidth
              style={{ marginBottom: '16px' , marginTop:'20px'}}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => handleClearFeedback(setFeedback3)}
                    onMouseDown={preventDefault}
                    edge="end"
                    style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }}
                  >
                     <ClearIcon fontSize="small" />
                  </IconButton>
                )
              }}
            />
            <Badge badgeContent={addBadgeCounts[2]} color="secondary">
        <Button variant="contained" color="primary" onClick={() => handleAddFeedback(feedback3, 2)} style={{ marginBottom: '5px'}}>
          Add
        </Button>
      </Badge>
      <Badge badgeContent={updateBadgeCounts[2]} color="secondary" style={{ marginLeft: '8px' }}>
        <Button variant="contained" color="secondary" onClick={() => handleUpdateFeedback(feedbackData[2]._id, feedback3, 2)}>
          Update
        </Button>
      </Badge>
          </CardContent>
        </Card>
      </div>
    </GridLayout>
  );
};

export default ResizableLayout;