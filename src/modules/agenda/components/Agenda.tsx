import React from "react";
import { Link } from "gatsby";
import { TrackContentType } from "../domain/TrackContentType";
import { Agenda } from "../domain/Agenda";

export default ({ agendaData }: { agendaData: Agenda[] }) => (
  <section id={"agenda"}>
    <div className="container">
      <h2>Agenda</h2>
      {agendaData.map((data: Agenda, agendaIndex: number) => (
        <div key={agendaIndex}>
          {data.rows.length === 0 && (
            <div className="alert alert-info" role={"alert"}>
              There is not agenda details yet
            </div>
          )}
          {data.rows.length > 0 && (
            <table role={"table"} className="table table-striped">
              <tbody>
                {data.rows.map((row, trIndex) => (
                  <tr
                    key={`${agendaIndex}-${trIndex}`}
                    className={"agenda_row"}
                  >
                    <th scope="row">{row.slot}</th>
                    {row.trackContents.map((content, tdIndex) => (
                      <td key={`${agendaIndex}-${trIndex}td${tdIndex}`}>
                        {content.type === TrackContentType.TALK ? (
                          <>
                            <Link
                              to={content.link as string}
                              title={content.title}
                            >
                              {content.title}
                            </Link>
                            <span className={"description"}>
                              {content.description}
                            </span>
                          </>
                        ) : (
                          <>
                            <span>{content.title}</span>
                            <span className={"description"}>
                              {content.description}
                            </span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  </section>
);
