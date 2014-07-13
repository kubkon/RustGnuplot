var searchIndex = {};
searchIndex['gnuplot'] = {"items":[[0,"","gnuplot","A simple gnuplot controller."],[1,"Axes2D","","2D axes that is used for drawing 2D plots"],[11,"common","","",0],[1,"Axes3D","","3D axes that is used for drawing 3D plots"],[11,"common","","",1],[11,"z_ticks","","",1],[11,"contour_base","","",1],[11,"contour_surface","","",1],[11,"contour_auto","","",1],[11,"contour_levels","","",1],[11,"contour_style","","",1],[11,"contour_label","","",1],[0,"figure","",""],[1,"Figure","gnuplot::figure","A figure that may contain multiple axes"],[11,"axes","","",2],[11,"terminal","","",2],[11,"output_file","","",2],[10,"new","","Creates a new figure",2],[10,"set_terminal","","Sets the terminal for gnuplot to use, as well as the file to output the figure to.\nTerminals that spawn a GUI don't need an output file, so pass an empty string for those.",2],[10,"axes2d","","Creates a set of 2D axes",2],[10,"axes3d","","Creates a set of 3D axes",2],[10,"show","","Launch a gnuplot process and display the figure on it",2],[10,"echo","","Echo the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `writer` - A function pointer that will be called multiple times with the command text and data",2],[10,"echo_to_file","","Save to a file the the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `filename` - Name of the file",2],[0,"options","gnuplot",""],[2,"PlotOption","gnuplot::options","An enumeration of plot options you can supply to plotting commands, governing\nthings like line width, color and others"],[12,"PointSymbol","","Sets the symbol used for points. The valid characters are as follows:",3],[12,"PointSize","","Sets the size of the points. The size acts as a multiplier, with 1.0 being the default.",3],[12,"Caption","","Sets the caption of the plot element. Set to empty to hide it from the legend.",3],[12,"LineWidth","","Sets the width of lines.",3],[12,"Color","","Sets the color of the plot element. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white). This specifies the fill color of a filled plot.",3],[12,"BorderColor","","Sets the color of the border of a filled plot (if it has one). The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white).",3],[12,"LineStyle","","Sets the style of the line. Note that not all gnuplot terminals support dashed lines. See DashType for the available styles.",3],[12,"FillAlpha","","Sets the transparency of a filled plot. `0.0` - fully transparent, `1.0` - fully opaque",3],[12,"FillRegion","","Sets the fill region. See FillRegion for the available regions.",3],[12,"ArrowType","","Sets what an arrowhead looks like",3],[12,"ArrowSize","","Sets the size of the arrowhead. This is specified in the units of graph (i.e. `1.0` would make the arrow as big as the graph).",3],[2,"FillRegion","","An enumeration of possible fill regions"],[12,"Above","","",4],[12,"Below","","",4],[12,"Between","","",4],[2,"AlignType","","An enumeration of possible text and label alignments"],[12,"AlignLeft","","",5],[12,"AlignRight","","",5],[12,"AlignCenter","","",5],[12,"AlignTop","","",5],[12,"AlignBottom","","",5],[2,"DashType","","An enumeration of possible dash styles"],[12,"Solid","","",6],[12,"SmallDot","","",6],[12,"Dot","","",6],[12,"Dash","","",6],[12,"DotDash","","",6],[12,"DotDotDash","","",6],[2,"ArrowheadType","","An enumeration of possible arrow head styles"],[12,"Open","","An arrow head shaped like a 'V'",7],[12,"Closed","","An arrow head shaped like an outlined triangle",7],[12,"Filled","","An arrow head shaped like a filled triangle",7],[12,"NoArrow","","No arrow head",7],[2,"AutoOption","","An enumeration of something that can either be fixed (e.g. the maximum of X values),\nor automatically determined"],[12,"Fix","","Fixes the value to a specific value",8],[12,"Auto","","Lets the value scale automatically",8],[2,"LabelOption","","An enumeration of label options that control label attributes"],[12,"TextOffset","","Sets the offset of the label in characters",9],[12,"Font","","Sets the font of the label. The string specifies the font type (e.g. \"Arial\") and the number specifies the size (the units are terminal dependent, but are often points)",9],[12,"TextColor","","Sets the color of the label text. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",9],[12,"Rotate","","Rotates the label by a certain number of degrees",9],[12,"TextAlign","","Sets the horizontal alignment of the label text (default is left alignment). See AlignType.",9],[12,"MarkerSymbol","","Sets a marker for the label. By default no marker is drawn. The valid characters are as follows:",9],[12,"MarkerColor","","Sets the color of the marker. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",9],[12,"MarkerSize","","Sets the size of the marker. The size acts as a multiplier, with 1.0 being the default.",9],[2,"TickOption","","An enumeration of axis tick options"],[12,"OnAxis","","Specifies whether the ticks are drawn at the borders of the plot, or on the axis",10],[12,"Mirror","","If the axes are drawn on the border, this specifies whether to draw the ticks on the opposite border as well",10],[12,"Inward","","If the axes are drawn on the border, this specifies whether to draw the ticks pointing inward or outward",10],[12,"MinorScale","","Sets the scale of the minor ticks",10],[12,"MajorScale","","Sets the scale of the major ticks",10],[2,"Tick","","Specifies a type of axis tick"],[12,"Major","","Major ticks have position and an optional label. The label may have a single C-style format specifier which will be replaced by the location of the tick",11],[12,"Minor","","Minor ticks only have position",11],[2,"BorderLocation2D","","Plot border locations"],[12,"Bottom","","",12],[12,"Left","","",12],[12,"Top","","",12],[12,"Right","","",12],[2,"LegendOption","","Legend options"],[12,"Reverse","","Puts curve samples to the left of the label",13],[12,"Invert","","Displays legend entries in opposite order",13],[12,"Horizontal","","Makes the legend horizontal (default is vertical)",13],[12,"Placement","","Specifies the location of the legend. The first argument specifies the horizontal\nplacement with respect to its position, and the second argument specifies the vertical placement",13],[12,"Title","","Title of the legend",13],[12,"MaxRows","","Specifies the maximum number of rows, when the legend is vertical",13],[12,"MaxCols","","Specifies the maximum number of columns, when the legend is horizontal",13],[2,"ContourStyle","","Specifies how the contours are drawn"],[12,"Linear","","Draw lines between points of equal value",14],[12,"Cubic","","Draw somewhat smoother curves between points with equal value.",14],[12,"Spline","","Draw an even smoother curve, this time approximating the locations of\npoints with equal value (clamped to range from 2 to 100).",14],[10,"map","","Same as `Option::map`",8],[0,"datatype","gnuplot",""],[6,"DataType","gnuplot::datatype",""],[9,"get","","",15],[0,"coordinates","gnuplot",""],[2,"Coordinate","gnuplot::coordinates","Specifies how to interpret the coordinate passed to a plotting command"],[12,"Graph","","Coordinates are done relative to a graph (i.e. an axis set). (0, 0) is the bottom left corner and (1, 1) is the top right corner.\nYou'd use this to place labels and other objects so that they remain in the same place relative to the graph no matter what you have plotted.",16],[12,"Axis","","Coordinates match those on the axes. You'd use this to place labels and other objects relative to regions of interest in the graph (e.g. labeling the peak of a function)",16],[10,"fmt","","",16],[6,"AxesCommon","gnuplot",""],[10,"set_pos_grid","","Set the position of the axes on the figure using grid coordinates.\n# Arguments\n* `nrow` - Number of rows in the grid. Must be greater than 0.\n* `ncol` - Number of columns in the grid. Must be greater than 0.\n* `pos` - Which grid cell to place this axes in, counting from top-left corner,\n          going left and then down, starting at 0.",17],[10,"set_pos","","Set the position of the axes on the figure using screen coordinates.\nThe coordinates refer to the bottom-left corner of the axes\n# Arguments\n* `x` - X position. Ranges from 0 to 1\n* `y` - Y position. Ranges from 0 to 1",17],[10,"set_size","","Set the size of the axes\n# Arguments\n* `w` - Width. Ranges from 0 to 1\n* `h` - Height. Ranges from 0 to 1",17],[10,"set_aspect_ratio","","Set the aspect ratio of the axes\n# Arguments\n* `ratio` - The aspect ratio. Set to Auto to return the ratio to default",17],[10,"set_x_label","","Set the label for the X axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",17],[10,"set_y_label","","Set the label for the Y axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",17],[10,"set_title","","Set the title for the axes\n# Arguments\n* `text` - Text of the title. Pass an empty string to hide the title\n* `options` - Array of LabelOption controlling the appearance of the title. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",17],[10,"label","","Adds a label to the plot, with an optional marker.\n# Arguments\n* `text` - Text of the label\n* `x` - X coordinate of the label\n* `y` - Y coordinate of the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label\n     * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker\n     * `MarkerSize` - Specifies the size for the marker\n     * `MarkerColor` - Specifies the color for the marker",17],[10,"set_x_ticks","","Sets the properties of the ticks on the X axis.",17],[10,"set_y_ticks","","Like `set_x_ticks` but for the Y axis.",17],[10,"set_x_ticks_custom","","Sets ticks on the X axis with specified labels at specified positions.",17],[10,"set_y_ticks_custom","","Like `set_x_ticks_custom` but for the the Y axis.",17],[10,"set_x_range","","Set the range of values for the X axis\n# Arguments\n* `min` - Minimum X value\n* `max` - Maximum X value",17],[10,"set_y_range","","Set the range of values for the Y axis\n# Arguments\n* `min` - Minimum Y value\n* `max` - Maximum Y value",17]],"paths":[[1,"Axes2D"],[1,"Axes3D"],[1,"Figure"],[2,"PlotOption"],[2,"FillRegion"],[2,"AlignType"],[2,"DashType"],[2,"ArrowheadType"],[2,"AutoOption"],[2,"LabelOption"],[2,"TickOption"],[2,"Tick"],[2,"BorderLocation2D"],[2,"LegendOption"],[2,"ContourStyle"],[6,"DataType"],[2,"Coordinate"],[6,"AxesCommon"]]};
initSearch(searchIndex);
