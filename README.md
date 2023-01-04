# Dave Madden's "7 GUIs" Takehome Assignment

## Assignment:<br>
Create the first 6 of the [7 GUIs](https://eugenkiss.github.io/7guis/tasks) using React+Typescript

## The GUIs
In order of increasing complexity/difficulty!

### The Counter
The basic React counter.

### The Temperature Converter

This works, but if I were pushing this to prod I'd come back and refactor to using one hook and one changeHandler.

### The Flight Booker

### The Timer!

I would like to revisit this with a custom hook (more flexible) like in [this blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

### CRUD
UPDATE and DELETE only enabled if a NAME in the NAMELIST is selected.

When a name is selected, it populates the Inputs, where it can be UPDATED or DELETED.
If text is modified, but CREATE is pressed, will create a new NAME.

At any point, pressing CREATE (as long as the inputs are not empty) takes the content of the Inputs, CREATES a new NAME in the NAMELIST, and deselects (which empties the Inputs.)

The FILTER INPUT filters the array for NAMES that match the text in the FILTER INPUT

### Circle Drawer
Click to place a circle.
Click a circle again to resize.

Make a bunch of changes and test out undo-redo!
