import { HistoryService } from './history.service';
import { HistoryDto } from './dto/history.dto';
export declare class HistoryController {
    private historyService;
    constructor(historyService: HistoryService);
    GetAll(): Promise<import("./madel/history.madel").HistoryTable[]>;
    Create(history: HistoryDto): Promise<import("./madel/history.madel").HistoryTable>;
    GetOne(id: string): Promise<import("./madel/history.madel").HistoryTable>;
    GetByUserId(id: string): Promise<import("./madel/history.madel").HistoryTable>;
    GetyBookId(id: string): Promise<import("./madel/history.madel").HistoryTable>;
    DeleteOne(id: string): Promise<number>;
    DeleteByUserId(id: string): Promise<number>;
    DeleteByBookId(id: string): Promise<void>;
}
