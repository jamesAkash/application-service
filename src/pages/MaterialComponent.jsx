import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import { CheckBox, ExpandMore, Palette } from "@mui/icons-material";

const MaterialComponent = () => {
  const test = false;
  const [expanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => setIsExpanded(!expanded);

  const [checkedValue, setCheckedValue] = useState(false);
  return (
    <div>
      <Typography gutterBottom={false} variant="h2">
        This is my app
      </Typography>
      <Typography variant="h6" paragraph={true} sx={{ fontSize: "18px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        perferendis voluptas esse quidem beatae id? Consequuntur animi rerum
        architecto quam?
      </Typography>
      <Typography variant="myVariant">Custom Variant</Typography>
      <Button color="secondary" variant="contained">
        Hello
      </Button>
      <Button
        sx={[
          {
            p: 1,
            ml: 2,
            fontWeight: "900",
            color: "primary.main",
            backgroundColor: "custom.main",
          },
          test && {
            backgroundColor: "black",
            color: "white",
          },
        ]}
        color="secondary"
        variant="outlined"
      >
        Sx styled
      </Button>
      <Button
        variant="contained"
        sx={{
          display: "block",
          maxWidth: {
            xs: 200,
            sm: 300,
            md: 400,
            lg: 500,
            xl: 600,
          },
          fontSize: {
            xs: "14px",
            sm: 18,
            md: "32px",
          },
          mt: 2,
        }}
      >
        Responsive
      </Button>
      <Paper
        elevation={4}
        sx={{
          m: {
            xs: "0 20px",
            sm: "0 auto",
            md: "0 auto",
            lg: "0 auto",
          },
          maxWidth: "600px",
          //   width: "100%",
          height: "200px",
          bgcolor: "secondary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ELEVATED PAPER
      </Paper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Card sx={{ maxWidth: "345px" }}>
          <CardHeader
            avatar={<Avatar>A</Avatar>}
            action={<IconButton>💭</IconButton>}
            title="48 Laws of Power"
            subheader="Robert Greene"
          />
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=400"
            height="194"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium necessitatibus libero minima. Doloribus minima animi
              mollitia, incidunt quae, impedit at tempora repudiandae fugiat
              inventore corrupti? Assumenda, quasi. Possimus, eum cum?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>

        <Card raised sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.pexels.com/photos/251454/pexels-photo-251454.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="green iguana"
              content="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
      <Box sx={{ maxWidth: "300px", m: "0 auto" }}>
        <List disablePadding sx={{ bgcolor: "#ece" }}>
          <ListSubheader>List sub header</ListSubheader>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>🔥</ListItemIcon>
              <ListItemText primary="primary" secondary="secondary text" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>🔥</ListItemIcon>
              <ListItemText>Not</ListItemText>
              <ListItemIcon>🔥</ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem alignItems="flex-start" sx={{ bgcolor: "#eee" }}>
            <ListItemButton onClick={() => alert("Hi")}>
              <ListItemAvatar>
                <Avatar>R</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Ronald Regan"
                secondary={<Typography variant="h6">admin</Typography>}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <List
        disablePadding
        dense
        sx={{ bgcolor: "dodgerblue", maxWidth: "300px" }}
      >
        {[0, 1, 2, 3].map((item) => {
          const listItem = `list item ${item}`;
          return (
            <ListItem
              key={item}
              disablePadding
              secondaryAction={<ListItemIcon>📰</ListItemIcon>}
            >
              <ListItemButton>
                <ListItemText>{listItem}</ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default MaterialComponent;
