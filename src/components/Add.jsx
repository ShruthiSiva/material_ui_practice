import React, { useState } from 'react'
import { Tooltip, Fab, Box, Modal,styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange} from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display:"flex",
    // for vertial centering
    alignItems:"center",
    // for horizontal centering
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    // for vertial centering
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {
    const [open, setOpen] = useState(false);
    
  return (
    <Box sx={{display:"flex", justifyContent:{xs: "center", md: "flex-start"}}}>
        <Tooltip title="Add" sx={{position:"fixed", bottom:20, left:{md:30}}} onClick={() => setOpen(true)}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>

        <StyledModal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {/* width="calc(40%)"  can be used to set width as 40% of screen size*/}
            <Box width={500} height={320} bgcolor="background.default" padding={3} borderRadius={5}>
                <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>

                <UserBox>
                    <Avatar src="https://material-ui.com/static/images/avatar/1.jpg"/>
                    <Typography fontWeight={500} variant="span">John Doe</Typography>
                </UserBox>

                <TextField
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                    sx={{width:"100%"}}
                />
                <Stack direction="row" gap={1} marginTop={2} marginBottom={3}>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary"/>
                    <VideoCameraBack color="success"/>
                    <PersonAdd color='error'/>
                </Stack>

                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}><DateRange /></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </Box>
  )
}

export default Add;