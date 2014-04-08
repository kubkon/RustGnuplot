var searchIndex = {}; var allPaths = {};
searchIndex['gnuplot'] = [{ty:"mod",name:"",path:"gnuplot",desc:"A simple gnuplot controller."},{ty:"struct",name:"Axes2D",path:"gnuplot",desc:"2D axes that is used for drawing 2D plots"},{ty:"struct",name:"Axes3D",path:"gnuplot",desc:"3D axes that is used for drawing 3D plots"},{ty:"mod",name:"figure",path:"gnuplot",desc:""},{ty:"struct",name:"Figure",path:"gnuplot::figure",desc:"A figure that may contain multiple axes"},{ty:"method",name:"new",path:"gnuplot::figure",desc:"Creates a new figure",parent:'6273'},{ty:"method",name:"set_terminal",path:"gnuplot::figure",desc:"Sets the terminal for gnuplot to use, as well as the file to output the figure to.\nTerminals that spawn a GUI don't need an output file, so pass an empty string for those.",parent:'6273'},{ty:"method",name:"set_grid",path:"gnuplot::figure",desc:"Sets the dimensions of the grid that you can use to\nplace multiple axes on\n# Arguments\n* `rows` - Number of rows. Set to 0 to disable the grid\n* `cols` - Number of columns. Set to 0 to disable the grid",parent:'6273'},{ty:"method",name:"axes2d",path:"gnuplot::figure",desc:"Creates a set of 2D axes",parent:'6273'},{ty:"method",name:"axes3d",path:"gnuplot::figure",desc:"Creates a set of 3D axes",parent:'6273'},{ty:"method",name:"show",path:"gnuplot::figure",desc:"Launch a gnuplot process and display the figure on it",parent:'6273'},{ty:"method",name:"echo",path:"gnuplot::figure",desc:"Echo the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `writer` - A function pointer that will be called multiple times with the command text and data",parent:'6273'},{ty:"method",name:"echo_to_file",path:"gnuplot::figure",desc:"Save to a file the the commands that if piped to a gnuplot process would display the figure\n# Arguments\n* `filename` - Name of the file",parent:'6273'},{ty:"mod",name:"options",path:"gnuplot",desc:""},{ty:"enum",name:"PlotOption",path:"gnuplot::options",desc:"An enumeration of plot options you can supply to plotting commands, governing\nthings like line width, color and others"},{ty:"variant",name:"PointSymbol",path:"gnuplot::options",desc:"Sets the symbol used for points. The valid characters are as follows:",parent:'7399'},{ty:"variant",name:"PointSize",path:"gnuplot::options",desc:"Sets the size of the points. The size acts as a multiplier, with 1.0 being the default.",parent:'7399'},{ty:"variant",name:"Caption",path:"gnuplot::options",desc:"Sets the caption of the plot element. Set to empty to hide it from the legend.",parent:'7399'},{ty:"variant",name:"LineWidth",path:"gnuplot::options",desc:"Sets the width of lines.",parent:'7399'},{ty:"variant",name:"Color",path:"gnuplot::options",desc:"Sets the color of the plot element. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white). This specifies the fill color of a filled plot.",parent:'7399'},{ty:"variant",name:"BorderColor",path:"gnuplot::options",desc:"Sets the color of the border of a filled plot (if it has one). The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white).",parent:'7399'},{ty:"variant",name:"LineStyle",path:"gnuplot::options",desc:"Sets the style of the line. Note that not all gnuplot terminals support dashed lines. See DashType for the available styles.",parent:'7399'},{ty:"variant",name:"FillAlpha",path:"gnuplot::options",desc:"Sets the transparency of a filled plot. `0.0` - fully transparent, `1.0` - fully opaque",parent:'7399'},{ty:"variant",name:"FillRegion",path:"gnuplot::options",desc:"Sets the fill region. See FillRegion for the available regions.",parent:'7399'},{ty:"variant",name:"ArrowType",path:"gnuplot::options",desc:"Sets what an arrowhead looks like",parent:'7399'},{ty:"variant",name:"ArrowSize",path:"gnuplot::options",desc:"Sets the size of the arrowhead. This is specified in the units of graph (i.e. `1.0` would make the arrow as big as the graph).",parent:'7399'},{ty:"enum",name:"FillRegion",path:"gnuplot::options",desc:"An enumeration of possible fill regions"},{ty:"variant",name:"Above",path:"gnuplot::options",desc:"",parent:'7451'},{ty:"variant",name:"Below",path:"gnuplot::options",desc:"",parent:'7451'},{ty:"variant",name:"Between",path:"gnuplot::options",desc:"",parent:'7451'},{ty:"enum",name:"AlignType",path:"gnuplot::options",desc:"An enumeration of possible text and label alignments"},{ty:"variant",name:"AlignLeft",path:"gnuplot::options",desc:"",parent:'7455'},{ty:"variant",name:"AlignRight",path:"gnuplot::options",desc:"",parent:'7455'},{ty:"variant",name:"AlignCenter",path:"gnuplot::options",desc:"",parent:'7455'},{ty:"variant",name:"AlignTop",path:"gnuplot::options",desc:"",parent:'7455'},{ty:"variant",name:"AlignBottom",path:"gnuplot::options",desc:"",parent:'7455'},{ty:"enum",name:"DashType",path:"gnuplot::options",desc:"An enumeration of possible dash styles"},{ty:"variant",name:"Solid",path:"gnuplot::options",desc:"",parent:'7461'},{ty:"variant",name:"SmallDot",path:"gnuplot::options",desc:"",parent:'7461'},{ty:"variant",name:"Dot",path:"gnuplot::options",desc:"",parent:'7461'},{ty:"variant",name:"Dash",path:"gnuplot::options",desc:"",parent:'7461'},{ty:"variant",name:"DotDash",path:"gnuplot::options",desc:"",parent:'7461'},{ty:"variant",name:"DotDotDash",path:"gnuplot::options",desc:"",parent:'7461'},{ty:"enum",name:"ArrowheadType",path:"gnuplot::options",desc:"An enumeration of possible arrow head styles"},{ty:"variant",name:"Open",path:"gnuplot::options",desc:"An arrow head shaped like a 'V'",parent:'7468'},{ty:"variant",name:"Closed",path:"gnuplot::options",desc:"An arrow head shaped like an outlined triangle",parent:'7468'},{ty:"variant",name:"Filled",path:"gnuplot::options",desc:"An arrow head shaped like a filled triangle",parent:'7468'},{ty:"variant",name:"NoArrow",path:"gnuplot::options",desc:"No arrow head",parent:'7468'},{ty:"enum",name:"AutoOption",path:"gnuplot::options",desc:"An enumeration of something that can either be fixed (e.g. the maximum of X values),\nor automatically determined"},{ty:"variant",name:"Fix",path:"gnuplot::options",desc:"Fixes the value to a specific value",parent:'7473'},{ty:"variant",name:"Auto",path:"gnuplot::options",desc:"Lets the value scale automatically",parent:'7473'},{ty:"enum",name:"LabelOption",path:"gnuplot::options",desc:"An enumeration of label options that control label attributes"},{ty:"variant",name:"TextOffset",path:"gnuplot::options",desc:"Sets the offset of the label in characters",parent:'7518'},{ty:"variant",name:"Font",path:"gnuplot::options",desc:"Sets the font of the label. The string specifies the font type (e.g. \"Arial\") and the number specifies the size (the units are terminal dependent, but are often points)",parent:'7518'},{ty:"variant",name:"TextColor",path:"gnuplot::options",desc:"Sets the color of the label text. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",parent:'7518'},{ty:"variant",name:"Rotate",path:"gnuplot::options",desc:"Rotates the label by a certain number of degrees",parent:'7518'},{ty:"variant",name:"TextAlign",path:"gnuplot::options",desc:"Sets the horizontal alignment of the label text (default is left alignment). See AlignType.",parent:'7518'},{ty:"variant",name:"MarkerSymbol",path:"gnuplot::options",desc:"Sets a marker for the label. By default no marker is drawn. The valid characters are as follows:",parent:'7518'},{ty:"variant",name:"MarkerColor",path:"gnuplot::options",desc:"Sets the color of the marker. The passed string can be a color name\n(e.g. \"black\" works), or an HTML color specifier (e.g. \"#FFFFFF\" is white)",parent:'7518'},{ty:"variant",name:"MarkerSize",path:"gnuplot::options",desc:"Sets the size of the marker. The size acts as a multiplier, with 1.0 being the default.",parent:'7518'},{ty:"enum",name:"TickOption",path:"gnuplot::options",desc:"An enumeration of axis tick options"},{ty:"variant",name:"OnAxis",path:"gnuplot::options",desc:"Specifies whether the ticks are drawn at the borders of the plot, or on the axis",parent:'7564'},{ty:"variant",name:"Mirror",path:"gnuplot::options",desc:"If the axes are drawn on the border, this specifies whether to draw the ticks on the opposite border as well",parent:'7564'},{ty:"variant",name:"Inward",path:"gnuplot::options",desc:"If the axes are drawn on the border, this specifies whether to draw the ticks pointing inward or outward",parent:'7564'},{ty:"variant",name:"MinorScale",path:"gnuplot::options",desc:"Sets the scale of the minor ticks",parent:'7564'},{ty:"variant",name:"MajorScale",path:"gnuplot::options",desc:"Sets the scale of the major ticks",parent:'7564'},{ty:"enum",name:"Tick",path:"gnuplot::options",desc:"Specifies a type of axis tick"},{ty:"variant",name:"Major",path:"gnuplot::options",desc:"Major ticks have position and an optional label. The label may have a single C-style format specifier which will be replaced by the location of the tick",parent:'7585'},{ty:"variant",name:"Minor",path:"gnuplot::options",desc:"Minor ticks only have position",parent:'7585'},{ty:"enum",name:"BorderLocation2D",path:"gnuplot::options",desc:"Plot border locations"},{ty:"variant",name:"Bottom",path:"gnuplot::options",desc:"",parent:'7601'},{ty:"variant",name:"Left",path:"gnuplot::options",desc:"",parent:'7601'},{ty:"variant",name:"Top",path:"gnuplot::options",desc:"",parent:'7601'},{ty:"variant",name:"Right",path:"gnuplot::options",desc:"",parent:'7601'},{ty:"enum",name:"LegendOption",path:"gnuplot::options",desc:"Legend options"},{ty:"variant",name:"Reverse",path:"gnuplot::options",desc:"Puts curve samples to the left of the label",parent:'7610'},{ty:"variant",name:"Invert",path:"gnuplot::options",desc:"Displays legend entries in opposite order",parent:'7610'},{ty:"variant",name:"Horizontal",path:"gnuplot::options",desc:"Makes the legend horizontal (default is vertical)",parent:'7610'},{ty:"variant",name:"Placement",path:"gnuplot::options",desc:"Specifies the location of the legend. The first argument specifies the horizontal\nplacement with respect to its position, and the second argument specifies the vertical placement",parent:'7610'},{ty:"variant",name:"Title",path:"gnuplot::options",desc:"Title of the legend",parent:'7610'},{ty:"variant",name:"MaxRows",path:"gnuplot::options",desc:"Specifies the maximum number of rows, when the legend is vertical",parent:'7610'},{ty:"variant",name:"MaxCols",path:"gnuplot::options",desc:"Specifies the maximum number of columns, when the legend is horizontal",parent:'7610'},{ty:"enum",name:"ContourStyle",path:"gnuplot::options",desc:"Specifies how the contours are drawn"},{ty:"variant",name:"Linear",path:"gnuplot::options",desc:"Draw lines between points of equal value",parent:'7636'},{ty:"variant",name:"Cubic",path:"gnuplot::options",desc:"Draw somewhat smoother curves between points with equal value.",parent:'7636'},{ty:"variant",name:"Spline",path:"gnuplot::options",desc:"Draw an even smoother curve, this time approximating the locations of\npoints with equal value (clamped to range from 2 to 100).",parent:'7636'},{ty:"method",name:"map",path:"gnuplot::options",desc:"Same as `Option::map`",parent:'7473'},{ty:"mod",name:"datatype",path:"gnuplot",desc:""},{ty:"trait",name:"DataType",path:"gnuplot::datatype",desc:""},{ty:"tymethod",name:"get",path:"gnuplot::datatype",desc:"",parent:'7679'},{ty:"mod",name:"coordinates",path:"gnuplot",desc:""},{ty:"enum",name:"Coordinate",path:"gnuplot::coordinates",desc:"Specifies how to interpret the coordinate passed to a plotting command"},{ty:"variant",name:"Graph",path:"gnuplot::coordinates",desc:"Coordinates are done relative to a graph (i.e. an axis set). (0, 0) is the bottom left corner and (1, 1) is the top right corner.\nYou'd use this to place labels and other objects so that they remain in the same place relative to the graph no matter what you have plotted.",parent:'8061'},{ty:"variant",name:"Axis",path:"gnuplot::coordinates",desc:"Coordinates match those on the axes. You'd use this to place labels and other objects relative to regions of interest in the graph (e.g. labeling the peak of a function)",parent:'8061'},{ty:"method",name:"fmt",path:"gnuplot::coordinates",desc:"",parent:'8061'},{ty:"trait",name:"AxesCommon",path:"gnuplot",desc:""},{ty:"method",name:"set_pos_grid",path:"gnuplot",desc:"Set the position of the axes on the figure using grid coordinates\n# Arguments\n* `row` - Row on the grid. Top-most row is 1\n* `column` - Column on the grid. Left-most column is 1",parent:'5326'},{ty:"method",name:"set_pos",path:"gnuplot",desc:"Set the position of the axes on the figure using screen coordinates.\nThe coordinates refer to the bottom-left corner of the axes\n# Arguments\n* `x` - X position. Ranges from 0 to 1\n* `y` - Y position. Ranges from 0 to 1",parent:'5326'},{ty:"method",name:"set_size",path:"gnuplot",desc:"Set the size of the axes\n# Arguments\n* `w` - Width. Ranges from 0 to 1\n* `h` - Height. Ranges from 0 to 1",parent:'5326'},{ty:"method",name:"set_aspect_ratio",path:"gnuplot",desc:"Set the aspect ratio of the axes\n# Arguments\n* `ratio` - The aspect ratio. Set to Auto to return the ratio to default",parent:'5326'},{ty:"method",name:"set_x_label",path:"gnuplot",desc:"Set the label for the X axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",parent:'5326'},{ty:"method",name:"set_y_label",path:"gnuplot",desc:"Set the label for the Y axis\n# Arguments\n* `text` - Text of the label. Pass an empty string to hide the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",parent:'5326'},{ty:"method",name:"set_title",path:"gnuplot",desc:"Set the title for the axes\n# Arguments\n* `text` - Text of the title. Pass an empty string to hide the title\n* `options` - Array of LabelOption controlling the appearance of the title. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label",parent:'5326'},{ty:"method",name:"label",path:"gnuplot",desc:"Adds a label to the plot, with an optional marker.\n# Arguments\n* `text` - Text of the label\n* `x` - X coordinate of the label\n* `y` - Y coordinate of the label\n* `options` - Array of LabelOption controlling the appearance of the label. Relevant options are:\n     * `Offset` - Specifies the offset of the label\n     * `Font` - Specifies the font of the label\n     * `TextColor` - Specifies the color of the label\n     * `Rotate` - Specifies the rotation of the label\n     * `Align` - Specifies how to align the label\n     * `MarkerSymbol` - Specifies the symbol for the marker. Omit to hide the marker\n     * `MarkerSize` - Specifies the size for the marker\n     * `MarkerColor` - Specifies the color for the marker",parent:'5326'},{ty:"method",name:"set_x_ticks",path:"gnuplot",desc:"Sets the properties of the ticks on the X axis.",parent:'5326'},{ty:"method",name:"set_y_ticks",path:"gnuplot",desc:"Like `set_x_ticks` but for the Y axis.",parent:'5326'},{ty:"method",name:"set_x_ticks_custom",path:"gnuplot",desc:"Sets ticks on the X axis with specified labels at specified positions.",parent:'5326'},{ty:"method",name:"set_y_ticks_custom",path:"gnuplot",desc:"Like `set_x_ticks_custom` but for the the Y axis.",parent:'5326'},{ty:"method",name:"set_x_range",path:"gnuplot",desc:"Set the range of values for the X axis\n# Arguments\n* `min` - Minimum X value\n* `max` - Maximum X value",parent:'5326'},{ty:"method",name:"set_y_range",path:"gnuplot",desc:"Set the range of values for the Y axis\n# Arguments\n* `min` - Minimum Y value\n* `max` - Maximum Y value",parent:'5326'}];allPaths['gnuplot'] = {'7649':{type:'mod',name:'private'},'7472':{type:'enum',name:'ArrowheadType'},'7445':{type:'enum',name:'PlotOption'},'6273':{type:'struct',name:'Figure'},'7413':{type:'enum',name:'PlotOption'},'7441':{type:'enum',name:'PlotOption'},'6206':{type:'mod',name:'figure'},'7585':{type:'enum',name:'Tick'},'7648':{type:'enum',name:'ContourStyle'},'8065':{type:'enum',name:'Coordinate'},'7407':{type:'enum',name:'PlotOption'},'7433':{type:'enum',name:'PlotOption'},'7456':{type:'enum',name:'AlignType'},'7564':{type:'enum',name:'TickOption'},'7403':{type:'enum',name:'PlotOption'},'7636':{type:'enum',name:'ContourStyle'},'7525':{type:'enum',name:'LabelOption'},'7609':{type:'enum',name:'BorderLocation2D'},'5305':{type:'trait',name:'AxesCommonPrivate'},'7626':{type:'enum',name:'LegendOption'},'7455':{type:'enum',name:'AlignType'},'7399':{type:'enum',name:'PlotOption'},'7641':{type:'enum',name:'ContourStyle'},'7576':{type:'enum',name:'TickOption'},'7544':{type:'enum',name:'LabelOption'},'10233':{type:'trait',name:'Axes2DPrivate'},'7620':{type:'enum',name:'LegendOption'},'7603':{type:'enum',name:'BorderLocation2D'},'7595':{type:'enum',name:'Tick'},'7464':{type:'enum',name:'DashType'},'7677':{type:'mod',name:'datatype'},'7468':{type:'enum',name:'ArrowheadType'},'7473':{type:'enum',name:'AutoOption'},'7637':{type:'enum',name:'ContourStyle'},'8206':{type:'struct',name:'Axes2D'},'7584':{type:'enum',name:'TickOption'},'7634':{type:'enum',name:'LegendOption'},'7454':{type:'enum',name:'FillRegion'},'7630':{type:'enum',name:'LegendOption'},'7558':{type:'enum',name:'LabelOption'},'7460':{type:'enum',name:'AlignType'},'7580':{type:'enum',name:'TickOption'},'7679':{type:'trait',name:'DataType'},'7452':{type:'enum',name:'FillRegion'},'7466':{type:'enum',name:'DashType'},'10281':{type:'mod',name:'axes3d'},'0':{type:'mod',name:'gnuplot'},'7461':{type:'enum',name:'DashType'},'7613':{type:'enum',name:'LegendOption'},'7552':{type:'enum',name:'LabelOption'},'7572':{type:'enum',name:'TickOption'},'7611':{type:'enum',name:'LegendOption'},'7417':{type:'enum',name:'PlotOption'},'12':{type:'mod',name:'axes_common'},'5326':{type:'trait',name:'AxesCommon'},'8199':{type:'mod',name:'axes2d'},'7449':{type:'enum',name:'PlotOption'},'7453':{type:'enum',name:'FillRegion'},'8069':{type:'enum',name:'Coordinate'},'7478':{type:'enum',name:'AutoOption'},'10950':{type:'trait',name:'Axes3DPrivate'},'7601':{type:'enum',name:'BorderLocation2D'},'8061':{type:'enum',name:'Coordinate'},'7605':{type:'enum',name:'BorderLocation2D'},'7568':{type:'enum',name:'TickOption'},'8197':{type:'mod',name:'internal'},'7463':{type:'enum',name:'DashType'},'7459':{type:'enum',name:'AlignType'},'8058':{type:'mod',name:'coordinates'},'7457':{type:'enum',name:'AlignType'},'7467':{type:'enum',name:'DashType'},'7518':{type:'enum',name:'LabelOption'},'7599':{type:'enum',name:'Tick'},'7607':{type:'enum',name:'BorderLocation2D'},'7471':{type:'enum',name:'ArrowheadType'},'7534':{type:'enum',name:'LabelOption'},'7540':{type:'enum',name:'LabelOption'},'7437':{type:'enum',name:'PlotOption'},'7462':{type:'enum',name:'DashType'},'7610':{type:'enum',name:'LegendOption'},'7562':{type:'enum',name:'LabelOption'},'6173':{type:'trait',name:'PlotWriter'},'7429':{type:'enum',name:'PlotOption'},'7469':{type:'enum',name:'ArrowheadType'},'7470':{type:'enum',name:'ArrowheadType'},'6168':{type:'mod',name:'writer'},'7423':{type:'enum',name:'PlotOption'},'7612':{type:'enum',name:'LegendOption'},'7397':{type:'mod',name:'options'},'7458':{type:'enum',name:'AlignType'},'7465':{type:'enum',name:'DashType'},'10287':{type:'struct',name:'Axes3D'},'7477':{type:'enum',name:'AutoOption'},'7548':{type:'enum',name:'LabelOption'},'7451':{type:'enum',name:'FillRegion'}};
initSearch(searchIndex);
